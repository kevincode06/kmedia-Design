// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>KMedia Design</h3>
            <p>Creative solutions for digital success</p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="icon instagram"></span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="icon linkedin"></span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:meloukevin@gmail.com">maloukevin6@gmail.com</a></li>
              <li><a href="tel:+27783313791">+27 78 331 3791</a></li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} KMedia Design. All rights reserved.</p>
          <p>Designed and developed by KMedia Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;