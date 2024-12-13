import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const path = "data/guestbookEntries.json";
const owner = "nynnejc";
const repo = "kaere-computer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, message, whereIsHome, color } = req.body;

      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
      });

      let guestbookEntries = [];
      let sha = "";

      if (Array.isArray(data)) {
        const file = data.find((item) => item.type === "file" && item.path === path);
        if (file && file.content) {
          const content = Buffer.from(file.content, "base64").toString();
          guestbookEntries = JSON.parse(content);
          sha = file.sha;
        }
      } else if (data.type === "file" && data.content) {
        const content = Buffer.from(data.content, "base64").toString();
        guestbookEntries = JSON.parse(content);
        sha = data.sha;
      }

      const newEntry = { name, message, whereIsHome, color };
      guestbookEntries.push(newEntry);

      const updatedContent = JSON.stringify(guestbookEntries, null, 2);
      const updatedContentBase64 = Buffer.from(updatedContent).toString("base64");

      const { data: updateData } = await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message: "Update guestbook with new entry",
        content: updatedContentBase64,
        sha,
      });

      return res.status(200).json({ success: true, entry: newEntry });
    } catch (error) {
      console.error("Error updating guestbook:", error);
      return res.status(500).json({ success: false, error: "Failed to update guestbook" });
    }
  } else {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
