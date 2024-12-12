import AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = 'guestbookEntries'; // DynamoDB table name

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all guestbook entries from DynamoDB
    const params = {
      TableName: tableName,
    };

    try {
      const data = await dynamoDb.scan(params).promise();
      res.status(200).json({ entries: data.Items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch guestbook entries' });
    }
  } else if (req.method === 'POST') {
    // Save a new guestbook entry to DynamoDB
    const { name, message } = req.body;

    const params = {
      TableName: tableName,
      Item: {
        id: new Date().toISOString(), // Unique ID for the entry
        name,
        message,
        createdAt: new Date().toISOString(),
      },
    };

    try {
      await dynamoDb.put(params).promise();
      res.status(201).json({ entry: params.Item });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create guestbook entry' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
