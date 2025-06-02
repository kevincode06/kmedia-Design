// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Professional design and development solutions tailored to your needs</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon graphic"></div>
            <h3>Graphic Design</h3>
            <ul>
              <li>Logo & Branding</li>
              <li>Business Cards & Flyers</li>
              <li>Social Media Graphics</li>
              <li>Product Packaging</li>
            </ul>
          </div>
          
          <div className="service-card">
            <div className="service-icon web"></div>
            <h3>Website Development</h3>
            <ul>
              <li>Responsive Websites</li>
              <li>Business & Portfolio Sites</li>
              <li>E-commerce solutions</li>
              <li>Maintenance & SEO Setup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;