import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

// Initialize DynamoDB client and document client
const client = new DynamoDB({});
const dynamoDB = DynamoDBDocumentClient.from(client);

// Define DynamoDB table name
const TABLE_NAME = 'GuestbookEntries';

// Helper function to create a response
const createResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
};

// GET method handler - Fetch guestbook entries from DynamoDB
const getEntries = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const data = await dynamoDB.send(new ScanCommand(params));  // Use the send method with ScanCommand
    console.log("Fetched guestbook entries:", data.Items);  // Log fetched entries
    return createResponse(200, { entries: data.Items });
  } catch (error) {
    console.error("Error fetching guestbook entries", error);
    return createResponse(500, { message: "Failed to fetch guestbook entries." });
  }
};

// POST method handler - Save a new guestbook entry to DynamoDB
const saveEntry = async (event) => {
  const { name, message, whereIsHome, color } = JSON.parse(event.body);

  if (!name || !message || !whereIsHome) {
    return createResponse(400, { message: "Name, message, and home are required fields." });
  }

  const entry = {
    id: uuidv4(),  // Using uuidv4 to generate a unique ID
    name,
    message,
    whereIsHome,
    color: color || "#FFB2D9",  // Default color if not provided
    timestamp: new Date().toISOString(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: entry,
  };

  try {
    console.log("Saving guestbook entry:", entry);  // Log the entry being saved
    await dynamoDB.send(new PutCommand(params));  // Use the send method with PutCommand
    return createResponse(201, { message: "Guestbook entry added successfully.", entry });
  } catch (error) {
    console.error("Error saving guestbook entry", error);
    return createResponse(500, { message: "Failed to save guestbook entry." });
  }
};

// Main Lambda function handler
export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2)); 
  
  const httpMethod = event.httpMethod;

  if (httpMethod === 'GET') {
    return getEntries(); // Handle GET request (fetch entries)
  } else if (httpMethod === 'POST') {
    return saveEntry(event); // Handle POST request (save new entry)
  }

  return createResponse(405, { message: `Method ${httpMethod} not allowed.` });
};
