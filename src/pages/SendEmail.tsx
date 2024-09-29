import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SendEmail() {
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [purpose, setPurpose] = useState('New blog posts');
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (didSubmit) {
      console.log({ subject, message, purpose, password });
      axios
        .post(
          'https://script.google.com/macros/s/AKfycbzeJWhlHqd6OSjZttGxJtFJgGhEG2-BhgEEG97J_tQWFpzeLg7NcuIkyOHLx2zL0O0T/exec',
          {
            subject,
            message,
            purpose,
            password,
          },
          { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
        )
        .then(function (response) {
          if (response.data?.toString() !== '200') {
            setError(response.data);
          } else {
            setSent(true);
          }
        })
        .catch(function (error) {
          setError(error?.message);
          console.log(error);
        });
    }
  }, [didSubmit]);

  return (
    <div className="container-fluid">
      <h1>Send Email</h1>
      {!didSubmit ? (
        <>
          <label htmlFor="password">Password</label>: &nbsp;
          <input
            type="password"
            id="password"
            value={password}
            pattern={`[A-Za-z0-9.'""\s!;\:/\@?]+`}
            required
            title="Characters must be letters, numbers, spaces, quotation marks, or periods for now."
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <br />
          <label htmlFor="subject">Subject</label>: &nbsp;
          <input
            type="text"
            id="subject"
            value={subject}
            pattern={`[A-Za-z0-9.'""\s!;\:/\@?]+`}
            required
            title="Characters must be letters, numbers, spaces, quotation marks, or periods for now."
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <br />
          <br />
          <label htmlFor="purpose">Purpose</label>: &nbsp;
          <select
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="New blog posts">New blog posts</option>
            <option value="Meetings">Meetings</option>
            <option value="Volunteer opportunities">
              Volunteer opportunities
            </option>
            <option value="Member post">Member post</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <br />
          <label htmlFor="message">Message</label>: &nbsp;
          <textarea
            id="message"
            value={message}
            rows={10}
            required
            title="Characters must be letters, numbers, spaces, quotation marks, or periods for now."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button
            onClick={(e) => {
              const subjectInput = document.getElementById(
                'subject'
              ) as HTMLInputElement;
              // const messageInput = document.getElementById('message');
              const isValid = [subjectInput].every((x) => x!.checkValidity());
              if (isValid) {
                e.preventDefault();
                setDidSubmit(true);
              } else {
                alert('One or more of the inputs contains invalid characters.');
              }
            }}
          >
            Send e-mail to subscribers
          </button>
        </>
      ) : (
        <p>
          {error.toString() === '401'
            ? 'Sorry, you are not authorized to send e-mails at this time.'
            : error || (sent && 'Your message was sent.')}
        </p>
      )}
    </div>
  );
}
