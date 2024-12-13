import { useState } from "react";
import { Octokit } from "@octokit/rest";

// GitHub repo information
const owner = "nynnejc";
const repo = "kaere-computer";
const path = "data/guestbookEntries.json";

const Guestbook = ({ guestbookEntries, error }: { guestbookEntries: any[]; error: string | null }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [whereIsHome, setWhereIsHome] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [color, setColor] = useState("#FFB2D9"); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message || !whereIsHome) {
      setErrorMessage("All fields are required.");
      return;
    }


    const newEntry = { name, message, whereIsHome, color };
    console.log("New guestbook entry:", newEntry);

   
    setName("");
    setMessage("");
    setWhereIsHome("");
    setErrorMessage("");
  };


  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  if (error) {
    return <p>Failed to fetch guestbook entries: {error}</p>;
  }

  return (
    <div>
      <h1>Guestbook</h1>

      <ul>
        {guestbookEntries.map((entry, index) => (
          <li key={index} style={{ color: entry.color || "black" }}>
            <strong>{entry.name}</strong>: {entry.message} <br />
            <small>{entry.whereIsHome}</small>
          </li>
        ))}
      </ul>

      <h2>Add a new entry</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="whereIsHome">Where is home?</label>
          <input
            type="text"
            id="whereIsHome"
            value={whereIsHome}
            onChange={(e) => setWhereIsHome(e.target.value)}
            required
          />
        </div>

        {/* Color Picker */}
        <div>
          <label htmlFor="color">Pick a color:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    let guestbookEntries = [];

    if (Array.isArray(data)) {
      const file = data.find((item) => item.type === "file" && item.path === path);
      if (file && file.content) {
        const content = Buffer.from(file.content, "base64").toString();
        guestbookEntries = JSON.parse(content);
      }
    } else if (data.type === "file" && data.content) {
      const content = Buffer.from(data.content, "base64").toString();
      guestbookEntries = JSON.parse(content);
    }

    return {
      props: { guestbookEntries },
    };
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return {
      props: { guestbookEntries: [], error: "Failed to fetch guestbook entries." },
    };
  }
}

export default Guestbook;
