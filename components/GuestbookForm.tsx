import { useState } from 'react';

const GuestbookForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });

    if (res.ok) {
      setSuccess(true);
      setName('');
      setMessage('');
      setTimeout(() => setSuccess(false), 3000);
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
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {success && <p>Thank you for your entry!</p>}
    </div>
  );
};

export default GuestbookForm;
