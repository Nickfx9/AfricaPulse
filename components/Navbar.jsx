import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">AfricaPulse 🌍</div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </div>

      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#community" onClick={() => setIsOpen(false)}>Community</a></li>
        <li><a href="#join-us" onClick={() => setIsOpen(false)}>Join Us</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}
