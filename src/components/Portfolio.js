// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: "Corporate Branding", category: "Branding" },
    { id: 2, title: "E-commerce Website", category: "Web Development" },
    { id: 3, title: "Product Packaging", category: "Graphic Design" },
    { id: 4, title: "Restaurant Menu", category: "Print Design" },
    { id: 5, title: "Mobile App UI", category: "UI/UX Design" },
    { id: 6, title: "Marketing Campaign", category: "Digital Marketing" },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2>Our Work</h2>
        <p className="section-subtitle">Explore our latest projects and creative solutions</p>
        
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-image">
                <div className={`image-placeholder project-${item.id}`}></div>
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <a 
            href="https://portfolio-g354.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn primary"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;