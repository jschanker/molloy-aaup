// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSearchParams } from "react-router-dom";
//import { HashLink } from 'react-router-hash-link';
import Navigation from './components/Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Benefits from './pages/Benefits';
import Home from './pages/Home';
import Join from './pages/Join';
import Contact from './pages/Contact';
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
          <Route
            path="/communications"
            element={<h1>Communications</h1>}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/opportunities" element={<h1>Opportunities</h1>} />
          <Route
            path="/professional-insurance"
            element={<h1>Professional Liability Insurance</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
