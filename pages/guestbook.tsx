import React, { useState, useEffect } from "react";
import ColorWheel from "../components/ColorWheel";
import Navbar from "../components/Navbar";

const API_ENDPOINT = "https://82eikoh5ne.execute-api.us-east-1.amazonaws.com/prod/guestbook";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  url?: string; // Optional URL field now
  color: string;
  timestamp: string;
}

const Guestbook = () => {
  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState(""); // Renamed from whereIsHome
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
        console.log("Raw data received from API:", data);

        // If data.body is a string, parse it; otherwise, use it directly.
        const parsedBody = typeof data.body === "string" ? JSON.parse(data.body) : data;
        console.log("Parsed body:", parsedBody);

        setGuestbookEntries(Array.isArray(parsedBody.entries) ? parsedBody.entries : []);
      } catch (error: any) {
        console.error("Error fetching entries:", error.message);
        setErrorMessage("Failed to load guestbook entries.");
      }
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (color === "#FFFFFF") {
      setErrorMessage("You have to select a color other than white to prove your humanity!");
      return;
    }

    // Only require name and message; URL is optional
    if (!name || !message) {
      setErrorMessage("Name and message are required.");
      return;
    }

    const newEntry = { name, message, url, color };

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

      const savedData = await response.json();
      const parsedSavedData =
        typeof savedData.body === "string"
          ? JSON.parse(savedData.body)
          : savedData;
      setGuestbookEntries((prevEntries) => [
        ...prevEntries,
        parsedSavedData.entry,
      ]);

      setName("");
      setMessage("");
      setUrl("");
      setColor("#FFFFFF");
      setErrorMessage("");
    } catch (error: any) {
      console.error("Error saving entry:", error.message);
      setErrorMessage("Failed to save your entry. Please try again.");
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen selection:bg-pink-300">
      <div className="sm:order-1">
        <Navbar />
      </div>

      <div className="flex flex-grow">
        <main className="ml-2 mt-0 sm:order-2">
          <h1 className="mb-8 mt-4">Guestbook</h1>
          <h4 className="custom-font-dauphine">Leave a message</h4>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}


          <div className="ml-20 mt-4">
            
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
              <div className="my-6">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="url">URL (optional):</label>
                <input
                  type="text"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourWebsite.com"
                />
              </div>
              <div className="my-6">
                <ColorWheel color={color} onChange={setColor} />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="ml-20 mt-4">
            <ul>
              {guestbookEntries.map((entry) => (
                <li key={entry.id} style={{ color: entry.color || "black" }}>
                  <strong>{entry.name}</strong>: {entry.message} <br />
                  {entry.url && <small>{entry.url}</small>}
                  <br />
                  <small>{new Date(entry.timestamp).toLocaleString()}</small>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>

      <footer className="text-right mr-4 sm:mt-auto sm:flex-0 visible sm:invisible place-content-end">
        <div>Nynne Just Christoffersen © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default Guestbook;
