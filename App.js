import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./styles.css";

// Home Section
const Home = () => (
  <section className="home-section" id="home">
    <h1>Anish Gyawali</h1>
    <p>Agriculturist</p>
    <p>Blending sustainable farming with cutting-edge technology to create impact-driven solutions.</p>
  </section>
);

// About Section
const About = () => (
  <section className="about-section">
    <h2>About Me</h2>
    <p>Hi, I'm Anish Gyawali, a passionate agriculturist and web developer...</p>
  </section>
);

// Expertise Section
const Expertise = () => (
  <section className="expertise-section">
    <h2>My Expertise</h2>
    <div className="expertise-item">
      <img src="your-image-url.jpg" alt="Expert" className="expert-image" />
      <div className="expert-info">
        <h3>Sustainable Farming</h3>
        <p>Implementing eco-friendly practices...</p>
      </div>
    </div>
    {/* Add other expertise items */}
  </section>
);

// Resume Section
const Resume = () => (
  <section className="resume-section">
    <h2>Resume</h2>
    <a href="/resume.pdf" download className="download-btn">Download CV</a>
  </section>
);

// Contact Section
const Contact = () => (
  <section className="contact-section">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to collaborate, feel free to reach out!</p>
    {/* Contact info */}
  </section>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="your-photo-url.jpg" alt="Anish Gyawali" /> {/* Your photo */}
            Anish Gyawali
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/expertise">My Expertise</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
