import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [didSubmit, setDidSubmit] = useState(false);
  return (
    <div className="container-fluid">
      <h1>Contact Us</h1>
      {!didSubmit ? (
        <>
          <p>
            Questions or problems for us? Fill out the below form, and we'll get
            back to you.
          </p>
          <br />
          <label htmlFor="name">Name</label>: &nbsp;
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <br />
          <label htmlFor="email">E-mail</label>: &nbsp;
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />
          <label htmlFor="message">Message</label>: &nbsp;
          <textarea
            type="text"
            id="message"
            value={message}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button onClick={() => setDidSubmit(true)}>Send feedback</button>
        </>
      ) : (
        <p>Thank you for your message. We will get back to you soon.</p>
      )}
      <br />
      <br />
    </div>
  );
}
