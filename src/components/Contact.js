// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Ready to bring your brand online?</h2>
          <p>Get in touch with us today to discuss your project.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon email"></div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:meloukevin@gmail.com">meloukevin@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon phone"></div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+27783313791">+27 78 331 3791</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon location"></div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;