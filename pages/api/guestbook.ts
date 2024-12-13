import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const path = 'data/guestbookEntries.json';
  const owner = 'nynnejc';
  const repo = 'kaere-computer';

  if (method === 'POST') {
    try {
      const { message, content } = req.body;

      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
      });

      const fileData = Array.isArray(data) ? data.find((item) => item.type === 'file' && item.path === path) : data;

      if (fileData && 'sha' in fileData) {
        const sha = fileData.sha;
        const fileContent = Buffer.from(content).toString('base64');

        await octokit.repos.createOrUpdateFileContents({
          owner,
          repo,
          path,
          message: "Update guestbook entry with new color",
          content: fileContent,
          sha,
        });

        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ error: 'SHA not found in the file data.' });
      }
    } catch (error) {
      console.error('Error updating guestbook:', error);
      return res.status(500).json({ error: 'Failed to update guestbook.' });
    }
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
