import { useEffect, useState } from 'react';

// Define the type for a guestbook entry
interface GuestbookEntry {
  name: string;
  message: string;
  date: string;
}

const Guestbook = () => {
  // Set up state with a type of GuestbookEntry[]
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    fetch('/api/guestbook')
      .then((response) => response.json())
      .then((data: GuestbookEntry[]) => setEntries(data)); // Type the data response
  }, []);

  return (
    <div>
      <h1>Guestbook</h1>
      {entries.map((entry, index) => (
        <div key={index}>
          <p>{entry.name}</p>
          <p>{entry.message}</p>
          <p>{entry.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Guestbook;
