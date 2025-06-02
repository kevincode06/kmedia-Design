// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            <strong>KMedia Design is your all-in-one creative partner.</strong>
          </p>
          <p>
            Founded by a passionate designer and developer, we specialize in visuals that 
            captivate and websites that work. Based in Johannesburg, South Africa, 
            we serve clients worldwide.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default About;