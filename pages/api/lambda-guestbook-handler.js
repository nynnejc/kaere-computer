import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
});
const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME;


export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await dynamoDB.scan({ TableName: TABLE_NAME }).promise();
      res.status(200).json({ entries: result.Items });
    } catch (error) {
      console.error("Error fetching data from DynamoDB", error);
      res.status(500).json({ message: "Failed to fetch guestbook entries" });
    }
  } else if (req.method === "POST") {
    const { name, message, whereIsHome, color } = req.body;

    if (!name || !message || !whereIsHome) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      name,
      message,
      whereIsHome,
      color,
      timestamp: new Date().toISOString(),
    };

    try {
      await dynamoDB
        .put({
          TableName: TABLE_NAME,
          Item: newEntry,
        })
        .promise();
      res.status(200).json({ entry: newEntry });
    } catch (error) {
      console.error("Error saving entry to DynamoDB", error);
      res.status(500).json({ message: "Failed to save your entry." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
