import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo + Brand Name */}
      <div className={styles.logoWrapper}>
        <motion.div
          className={styles.logoHex}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
        >
          <img src="/images/africapulse-logo.png" alt="AfricaPulse Logo" />
        </motion.div>
        <div className={styles.brandText}>
          <span className={styles.futuristicA}>A</span>FRIC
          <span className={styles.futuristicA}>A</span>PULSE
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className={styles.navLinks}>
        <li><a href="#home" className={styles.navItem}>Home</a></li>
        <li><a href="#events" className={styles.navItem}>Events</a></li>
        <li><a href="#community" className={styles.navItem}>Community</a></li>
        <li><a href="#about" className={styles.navItem}>About</a></li>
        <li><a href="#contact" className={styles.navItem}>Contact</a></li>
        <li><a href="#join" className={styles.joinButton}>Join Now</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Slide-In Menu */}
      {isOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#events" onClick={() => setIsOpen(false)}>Events</a></li>
            <li><a href="#community" onClick={() => setIsOpen(false)}>Community</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li><a href="#join" className={styles.joinButton}>Join Now</a></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}