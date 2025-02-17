import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDB({});
const dynamoDB = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "GuestbookEntries"; // Ensure this matches your actual DynamoDB table name

const createResponse = (statusCode: number, body: object) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Enables CORS
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
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

const saveEntry = async (event: any) => {
  console.log("Received POST event:", event);

  try {
    const { name, message, url, color } = JSON.parse(event.body);

    if (!name || !message) {
      console.error("Validation error: Name and message are required.");
      return createResponse(400, { message: "Name and message are required fields." });
    }

    const entry = {
      id: uuidv4(),
      name,
      message,
      url: url || "", // Ensure optional URL field
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

export const handler = async (event: any) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  let httpMethod = event.httpMethod;
  if (!httpMethod && event.requestContext?.http) {
    httpMethod = event.requestContext.http.method;
  }

  if (!httpMethod) {
    return createResponse(400, { message: "Missing HTTP method." });
  }

  if (httpMethod === "OPTIONS") {
    return createResponse(200, {}); // Handles preflight CORS requests
  }

  if (httpMethod === "GET") {
    return getEntries();
  } else if (httpMethod === "POST") {
    return saveEntry(event);
  }

  return createResponse(405, { message: `Method ${httpMethod} not allowed.` });
};
