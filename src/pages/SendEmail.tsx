import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import jwt from 'jsonwebtoken';
// import * as google from 'google-auth-library';

export default function SendEmail() {
  // const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [purpose, setPurpose] = useState('New blog posts');
  const [token, setToken] = useState(/*localStorage.getItem('token')*/ '');
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleCallbackResponse = (response) => {
    //localStorage.setItem('token', response?.credential);
    setToken(response?.credential);
    // console.log(response);
  };

  useEffect(() => {
    if (typeof google !== 'undefined') {
      // console.log(google, window.origin, import.meta.env);
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(document.getElementById('signInDiv'), {
        theme: 'outline',
        width: 200,
        size: 'large',
      });
    }
    if (didSubmit) {
      console.log({ subject, message, purpose, token });
      axios
        .post(
          'https://script.google.com/macros/s/AKfycbzhjGbVq9pGxRNMQmWD3Inj2MrouBR-g3kF551pZX3sDDLjBnn8Hqh1iefOdnjugEHN/exec',
          {
            token,
            subject,
            message,
            purpose,
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
      <p>
        Currently, you need to sign in with your Google account to send an
        e-mail to the mailing list and be one of the authorized senders. If you
        are not currently authorized to do so and would like to send an e-mail
        to the list, please{' '}
        <Link to="/contact">
          let us know the message you want us to send on your behalf
        </Link>
        .
      </p>
      <br />
      <div id="signInDiv" className="custom-google-button">
        Login with Google
      </div>
      <br />
      {!didSubmit ? (
        <>
          {/*<label htmlFor="password">Password</label>: &nbsp;
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
          <br />*/}
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
              if (!token) {
                setDidSubmit(false);
                return alert(
                  'Please click the sign in button and select your account first to send the message.'
                );
              }
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
