import { useState } from 'react';

const GuestbookForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submit triggered with:", { name, message, url });


    try {
      const res = await fetch('https://82eikoh5ne.execute-api.us-east-1.amazonaws.com/prod/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, url }),
      });

      console.log("POST response:", res);

      if (res.ok) {
        const data = await res.json();
        console.log("Response JSON:", data);

        setSuccess(true);
        setName('');
        setMessage('');
        setUrl('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        console.error("Failed to save entry:", res.statusText);
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div className="guestbook-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          required
        ></textarea>

        <input
          type="text"
          placeholder="URL (optional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {success && <p>Thanks for leaving a message!</p>}
    </div>
  );
};

export default GuestbookForm;
