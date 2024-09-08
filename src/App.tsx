import { useState } from 'react';
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
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/benefits" exact element={<Benefits />} />
          <Route
            path="/communications"
            exact
            element={<h1>Communications</h1>}
          />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/join" exact element={<Join />} />
          <Route path="/opportunities" exact element={<h1>Opportunities</h1>} />
          <Route
            path="/professional-insurance"
            exact
            element={<h1>Professional Liability Insurance</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
