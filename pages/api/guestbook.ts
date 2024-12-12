import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = "nynnejc"; 
const repo = "kaere-computer"; 
const path = "data/guestbookEntries.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // Fetch content from GitHub repository
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
      });

      // Check if the data is an array or object and handle accordingly
      if (Array.isArray(data)) {
        // If data is an array, you need to look for the file in the list
        const fileData = data.find(item => item.type === "file");
        if (fileData && fileData.content) {
          const content = Buffer.from(fileData.content, "base64").toString();
          const guestbookEntries = JSON.parse(content);
          return res.status(200).json(guestbookEntries);
        }
      } else if (data.type === "file" && data.content) {
        // If data is a single file object
        const content = Buffer.from(data.content, "base64").toString();
        const guestbookEntries = JSON.parse(content);
        return res.status(200).json(guestbookEntries);
      }

      return res.status(500).json({ error: "Invalid data format received from GitHub." });
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
      return res.status(500).json({ error: "Failed to fetch guestbook entries." });
    }
  } else if (req.method === "POST") {
    const { name, message } = req.body;

    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required." });
    }

    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
      });

      let guestbookEntries = [];
      let sha = "";

      // Handle similar to the GET method
      if (Array.isArray(data)) {
        const fileData = data.find(item => item.type === "file");
        if (fileData && fileData.content) {
          const content = Buffer.from(fileData.content, "base64").toString();
          guestbookEntries = JSON.parse(content);
          sha = fileData.sha;
        }
      } else if (data.type === "file" && data.content) {
        const content = Buffer.from(data.content, "base64").toString();
        guestbookEntries = JSON.parse(content);
        sha = data.sha;
      }

      guestbookEntries.push({ name, message, timestamp: new Date().toISOString() });

      const updatedContent = Buffer.from(JSON.stringify(guestbookEntries, null, 2)).toString("base64");

      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message: "Add guestbook entry",
        content: updatedContent,
        sha,
      });

      return res.status(201).json({ message: "Entry added successfully." });
    } catch (error) {
      console.error("Error updating guestbook entries:", error);
      return res.status(500).json({ error: "Failed to update guestbook entries." });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
