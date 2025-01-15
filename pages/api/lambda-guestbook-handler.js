const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define your DynamoDB table name
const TABLE_NAME = 'GuestbookEntries';

exports.handler = async (event) => {
  const method = event.httpMethod;

  if (method === 'GET') {
    // Fetch guestbook entries from DynamoDB
    try {
      const result = await dynamoDB.scan({ TableName: TABLE_NAME }).promise();
      return {
        statusCode: 200,
        body: JSON.stringify({ entries: result.Items }),
      };
    } catch (error) {
      console.error("Error fetching data from DynamoDB", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to fetch guestbook entries' }),
      };
    }
  } else if (method === 'POST') {
    // Add a new entry to the guestbook in DynamoDB
    const requestBody = JSON.parse(event.body);

    const newEntry = {
      TableName: TABLE_NAME,
      Item: {
        id: Date.now().toString(), // Unique ID for the new entry
        name: requestBody.name,
        message: requestBody.message,
        whereIsHome: requestBody.whereIsHome,
        color: requestBody.color,
        timestamp: new Date().toISOString(),
      },
    };

    try {
      // Save the new entry to DynamoDB
      await dynamoDB.put(newEntry).promise();
      return {
        statusCode: 200,
        body: JSON.stringify(newEntry.Item),
      };
    } catch (error) {
      console.error("Error saving entry to DynamoDB", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to save your entry' }),
      };
    }
  } else {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
