import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

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
    const cleanedEntries = data.Items.map(item => {
      const cleanedItem = {
        ...item,
        name: item.name.replace(/^"|"$/g, ''),
        message: item.message.replace(/^"|"$/g, ''),
        whereIsHome: item.whereIsHome.replace(/^"|"$/g, ''),
        color: item.color.replace(/^"|"$/g, '')
      };
      return cleanedItem;
    });

    return createResponse(200, { entries: cleanedEntries });
  } catch (error) {
    return createResponse(500, { message: "Failed to fetch guestbook entries." });
  }
};

const saveEntry = async (event) => {
  const { name, message, whereIsHome, color } = JSON.parse(event.body);

  if (!name || !message || !whereIsHome) {
    return createResponse(400, { message: "Name, message, and home are required fields." });
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
    await dynamoDB.send(new PutCommand(params));
    return createResponse(201, { message: "Guestbook entry added successfully.", entry });
  } catch (error) {
    return createResponse(500, { message: "Failed to save guestbook entry." });
  }
};

export const handler = async (event) => {
  const httpMethod = event.httpMethod;

  if (httpMethod === 'GET') {
    return getEntries();
  } else if (httpMethod === 'POST') {
    return saveEntry(event);
  }

  return createResponse(405, { message: `Method ${httpMethod} not allowed.` });
};
