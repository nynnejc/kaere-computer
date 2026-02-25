const { DynamoDBDocumentClient, ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDB({});
const dynamoDB = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'GuestbookEntries';
const RATE_LIMIT_TABLE_NAME = process.env.RATE_LIMIT_TABLE_NAME || "GuestbookRateLimits";
const RATE_LIMIT_WINDOW_SECONDS = Number(process.env.RATE_LIMIT_WINDOW_SECONDS || "30");


const generateId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const createResponse = (statusCode, body, extraHeaders = {}) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "Content-Type", // Ensure headers are allowed
    ...extraHeaders,
  },
  body: JSON.stringify(body),
});

const getClientIp = (event) => {
  const xForwardedFor = event?.headers?.["x-forwarded-for"] || event?.headers?.["X-Forwarded-For"];
  if (typeof xForwardedFor === "string" && xForwardedFor.length > 0) {
    return xForwardedFor.split(",")[0].trim();
  }

  return (
    event?.requestContext?.identity?.sourceIp ||
    event?.requestContext?.http?.sourceIp ||
    "unknown"
  );
};

const reserveRateLimitSlot = async (clientIp) => {
  if (!clientIp || clientIp === "unknown") {
    return { allowed: false };
  }

  const now = Math.floor(Date.now() / 1000);
  const expiresAt = now + RATE_LIMIT_WINDOW_SECONDS;
  const params = {
    TableName: RATE_LIMIT_TABLE_NAME,
    Item: {
      ip: clientIp,
      createdAt: now,
      expiresAt,
    },
    ConditionExpression: "attribute_not_exists(ip)",
  };

  try {
    await dynamoDB.send(new PutCommand(params));
    return { allowed: true };
  } catch (error) {
    if (error?.name === "ConditionalCheckFailedException") {
      return { allowed: false, retryAfterSeconds: RATE_LIMIT_WINDOW_SECONDS };
    }
    throw error;
  }
};

const getEntries = async () => {
  const params = { TableName: TABLE_NAME };

  try {
    const data = await dynamoDB.send(new ScanCommand(params));
    console.log("Fetched entries:", data.Items);

    return createResponse(200, { entries: data.Items || [] });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return createResponse(500, { message: "Failed to fetch guestbook entries." });
  }
};

const saveEntry = async (event) => { 
  console.log("Received POST event:", event);

  try {
    const clientIp = getClientIp(event);
    const rateLimit = await reserveRateLimitSlot(clientIp);
    if (!rateLimit.allowed) {
      return createResponse(
        429,
        { message: "Too many requests. Please try again later." },
        { "Retry-After": String(rateLimit.retryAfterSeconds || RATE_LIMIT_WINDOW_SECONDS) }
      );
    }

    const { name, message, url, color } = JSON.parse(event.body);

    if (!name || !message) {
      console.error("Validation error: Name and message are required.");
      return createResponse(400, { message: "Name and message are required fields." });
    }

    const entry = {
      id: generateId(),
      name,
      message,
      url: url || "",
      color: color || "#FFB2D9",
      timestamp: new Date().toISOString(),
    };

    const params = {
      TableName: TABLE_NAME,
      Item: entry,
    };

    await dynamoDB.send(new PutCommand(params));
    console.log("Entry saved successfully:", entry);

    return createResponse(201, { message: "Guestbook entry added successfully.", entry });
  } catch (error) {
    console.error("Error saving entry:", error);
    return createResponse(500, { message: "Failed to save guestbook entry." });
  }
};

exports.handler = async (event) => { 
  console.log("Received event:", JSON.stringify(event, null, 2));

  let httpMethod = event.httpMethod;
  if (!httpMethod && event.requestContext?.http) {
    httpMethod = event.requestContext.http.method;
  }

  if (!httpMethod) {
    return createResponse(400, { message: "Missing HTTP method." });
  }

  if (httpMethod === "OPTIONS") {
    return createResponse(200, {});
  }

  if (httpMethod === "GET") {
    return getEntries();
  } else if (httpMethod === "POST") {
    return saveEntry(event);
  }

  return createResponse(405, { message: `Method ${httpMethod} not allowed.` });
};
