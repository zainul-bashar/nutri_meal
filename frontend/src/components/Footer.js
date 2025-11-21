// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-app-name">Nutri-Meal</span>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-button">Github</a>
      </div>
    </footer> 
  );
};

export default Footer;