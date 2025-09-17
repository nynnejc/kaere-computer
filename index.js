const { DynamoDBDocumentClient, ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDB({});
const dynamoDB = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'GuestbookEntries';


const generateId = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return `${Date.now()}-${array[0]}`;
};

const createResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "Content-Type", // Ensure headers are allowed
  },
  body: JSON.stringify(body),
});

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
