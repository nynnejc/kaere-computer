import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";

// GitHub repo information
const owner = "nynnejc"; 
const repo = "kaere-computer"; 
const path = "data/guestbookEntries.json"; // Path to your JSON file

const Guestbook = () => {
  const [guestbookEntries, setGuestbookEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuestbookEntries = async () => {
      try {
        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        });

        // Fetch file content from GitHub
        const { data } = await octokit.repos.getContent({
          owner,
          repo,
          path,
        });

        let content = "";

        // Check if data is an array (multiple files)
        if (Array.isArray(data)) {
          const file = data.find((item) => item.type === "file");
          if (file && file.content) {
            content = file.content;
          }
        } else if (data.type === "file" && data.content) {
          content = data.content;
        }

        if (content) {
          // Decode content from base64
          const decodedContent = Buffer.from(content, "base64").toString();
          const entries = JSON.parse(decodedContent);
          setGuestbookEntries(entries);
        } else {
          throw new Error("No content found in the file.");
        }
      } catch (error) {
        console.error("Error fetching guestbook entries:", error);
        setError("Failed to fetch guestbook entries.");
      } finally {
        setLoading(false);
      }
    };

    fetchGuestbookEntries();
  }, []);

  if (loading) {
    return <p>Loading guestbook entries...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Guestbook</h1>
      <ul>
        {guestbookEntries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong>: {entry.message} <br />
            <small>{entry.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guestbook;
