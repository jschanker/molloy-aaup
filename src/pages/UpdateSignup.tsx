// import { useState } from 'react';

export default function UpdateSignup() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [didSubmit, setDidSubmit] = useState(false);
  return (
    <div className="container-fluid">
      {/*
      <h1>Sign up for updates</h1>
      {!didSubmit ? (
        <>
          <p>
            Get notified of updates by e-mail.
          </p>
          <br />
		  <form>
          <label htmlFor="name">Name</label>: &nbsp;
          <input
            type="text"
            id="name"
            value={name}
			pattern="[A-Za-z]+"
			required
			title="Please enter a valid name"
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
            id="message"
            value={message}
            rows={10}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <br />
          <input
            type="submit" 
            onClick={(e) => {
			  const nameInput = document.getElementById('name');
			  const emailInput = document.getElementById('email');
			  const isValid = [nameInput, emailInput].every(x => x.checkValidity())
			  if (isValid) {
			    e.preventDefault();
				fetch(
			    setDidSubmit(true);
			  }
			}} 
			value="Send feedback"
		  />
		  </form>
        </>
      ) : (
        <p>Thank you for your message. We will get back to you soon.</p>
      )}
	  */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScekkhgRYODyYUYEjkSseRJiDIfzCJ7wQ_ijQdWKlXFkrwLhg/viewform?embedded=true"
        width="100%"
        height="1469"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
}
