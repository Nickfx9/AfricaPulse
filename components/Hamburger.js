import { useState } from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="/events" onClick={toggleMenu}>Events</a>
          <a href="#community" onClick={toggleMenu}>Community</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="#join" onClick={toggleMenu} className={styles.joinButton}>Join Now</a>
        </div>
      )}
    </>
  );
}
