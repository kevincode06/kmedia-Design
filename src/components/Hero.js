// src/components/Hero.js
import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Creative Designs. Custom Websites. One Studio.</h1>
          <p>
            We help businesses stand out with stunning visuals and powerful websites. 
            From logos to live sites — we bring your brand to life.
          </p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500} className="btn primary">
              Let's Build Your Brand
            </Link>
            <Link to="services" smooth={true} duration={500} className="btn secondary">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;