// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="hero" smooth={true} duration={500}>KMedia Design</Link>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="services" smooth={true} duration={500} onClick={closeMenu}>Services</Link>
          <Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>Portfolio</Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;