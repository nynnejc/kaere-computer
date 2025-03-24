import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator'; 


const client = new DynamoDB({});
const dynamoDB = DynamoDBDocumentClient.from(client);

const TABLE_NAME = 'GuestbookEntries';

const createResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
};


const getEntries = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const data = await dynamoDB.send(new ScanCommand(params));
    console.log("Fetched guestbook entries:", data.Items);
    return createResponse(200, { entries: data.Items });
  } catch (error) {
    console.error("Error fetching guestbook entries", error);
    return createResponse(500, { message: "Failed to fetch guestbook entries." });
  }
};


const saveEntry = async (event) => {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (error) {
    return createResponse(400, { message: "Invalid JSON payload." });
  }

  let { name, message, whereIsHome, color } = data;

  if (!name || !message || !whereIsHome) {
    return createResponse(400, { message: "Name, message, and home are required fields." });
  }

  name = validator.escape(validator.trim(name));
  message = validator.escape(validator.trim(message));
  whereIsHome = validator.escape(validator.trim(whereIsHome));
  
  if (!validator.isLength(name, { min: 1, max: 50 })) {
    return createResponse(400, { message: "Name must be between 1 and 50 characters." });
  }
  if (!validator.isLength(message, { min: 1, max: 500 })) {
    return createResponse(400, { message: "Message must be between 1 and 500 characters." });
  }
  
  if (data.url && !validator.isURL(data.url)) {
    return createResponse(400, { message: "Provided URL is invalid." });
  }

  if (color && !validator.matches(color, /^#[0-9a-fA-F]{6}$/)) {
    return createResponse(400, { message: "Color must be a valid hex code." });
  }

  const entry = {
    id: uuidv4(),
    name,
    message,
    whereIsHome,
    color: color || "#FFB2D9", 
    timestamp: new Date().toISOString(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: entry,
  };

  try {
    console.log("Saving guestbook entry:", entry);
    await dynamoDB.send(new PutCommand(params));
    return createResponse(201, { message: "Guestbook entry added successfully.", entry });
  } catch (error) {
    console.error("Error saving guestbook entry", error);
    return createResponse(500, { message: "Failed to save guestbook entry." });
  }
};

export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2)); 
  
  const httpMethod = event.requestContext.http.method;

  if (httpMethod === 'GET') {
    return getEntries();
  } else if (httpMethod === 'POST') {
    return saveEntry(event);
  }

  return createResponse(405, { message: `Method ${httpMethod} not allowed.` });
};
