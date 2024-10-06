import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState(
    topic === 'union-volunteer' ? 'Volunteer to form union chapter inquiry' : ''
  );
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (didSubmit) {
      console.log({ name, subject, email, message });
      axios
        .post(
          'https://script.google.com/macros/s/AKfycbx6ObhtKM-67JBT07acgCpRVjvL1At_-3Ji1B8uDBtn9CYbbX8KsFo7MPje6hAKcoJHdw/exec',
          {
            name,
            email,
            subject,
            message,
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
          <label htmlFor="subject">Subject</label>: &nbsp;
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <br />
          <br />
          <label htmlFor="message">Message</label>: &nbsp;
          <textarea
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
        <p>
          {error.toString() === '401'
            ? 'Sorry, you are not authorized to send e-mails at this time.'
            : error ||
              (sent &&
                'Thank you for your message. We will get back to you soon.')}
        </p>
      )}
      <br />
      <br />
    </div>
  );
}
