// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";
//import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Benefits from './pages/Benefits';
import Home from './pages/Home';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Communications from './pages/Communications';
import UpdateSignup from './pages/UpdateSignup';
import SendEmail from './pages/SendEmail';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/updates-signup" element={<UpdateSignup />} />
          <Route
            path="/opportunities"
            element={
              <div className="container-fluid">
                <h1>Volunteer Opportunities</h1>
                <p>
                  Looking to help our AAUP chapter out? First, if you're not
                  already a member, please <Link to="/join">Join AAUP</Link>.
                  Next, if you're ready, you can help us{' '}
                  <a
                    href="https://www.aaup.org/chapter-resources/forming-new-union"
                    target="_blank"
                  >
                    form a union chapter
                  </a>
                  . If you're interested, please use the{' '}
                  <Link to="/contact?topic=union-volunteer">Contact Us</Link>{' '}
                  page to let us know.
                </p>
              </div>
            }
          />
          <Route
            path="/professional-insurance"
            element={
              <div className="container-fluid">
                <h1>Professional Liability Insurance</h1>
                <a
                  href="https://www.aaupambainsurance.com/business-insurance/professional-liability/professional-liability/professional-liability.html"
                  target="_blank"
                >
                  Get it here!
                </a>
              </div>
            }
          />
          <Route
            path="/forming-union"
            element={
              <div className="container-fluid">
                <h1>Forming a Union Chapter</h1>
                <a
                  href="https://www.aaup.org/chapter-resources/forming-new-union"
                  target="_blank"
                >
                  Information on how to Unionize
                </a>
              </div>
            }
          />
          <Route path="send-email" element={<SendEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
