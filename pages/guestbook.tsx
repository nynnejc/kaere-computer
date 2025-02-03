import React, { useState, useEffect } from "react";

const API_ENDPOINT = "https://82eikoh5ne.execute-api.us-east-1.amazonaws.com/prod/guestbook";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  whereIsHome: string;
  color: string;
  timestamp: string;
}

const Guestbook = () => {
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [whereIsHome, setWhereIsHome] = useState("");
  const [color, setColor] = useState("#FFFFFF");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch guestbook entries.");
        }
        const data = await response.json();
        setGuestbookEntries(data.entries);
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to load guestbook entries.");
      }
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message || !whereIsHome) {
      setErrorMessage("All fields are required.");
      return;
    }

    const newEntry = { name, message, whereIsHome, color };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });

      if (!response.ok) {
        throw new Error("Failed to save entry.");
      }

      const savedEntry = await response.json();

  
      setGuestbookEntries((prevEntries) => [...prevEntries, savedEntry.entry]);

      setName("");
      setMessage("");
      setWhereIsHome("");
      setColor("#FFFFFF");
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to save your entry. Please try again.");
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen selection:bg-pink-300">
      <h1 className="mb-8 mt-4">Guestbook</h1>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <ul>
        {guestbookEntries.map((entry) => (
          <li key={entry.id} style={{ color: entry.color || "black" }}>
            <strong>{entry.name}</strong>: {entry.message} <br />
            <small>{entry.whereIsHome}</small>
            <br />
            <small>{new Date(entry.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>

      <h2>Add a new entry</h2>
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

export default Guestbook;
