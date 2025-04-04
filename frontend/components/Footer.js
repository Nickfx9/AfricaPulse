import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 AfricaPulse. All rights reserved.</p>
        <p>Yournumber one marekting agency</p>
        <ul className="social-links">
          <li><Link href="https://facebook.com"><a target="_@AfricaPulse" rel="noopener noreferrer">Facebook</a></Link></li>
          <li><Link href="https://twitter.com"><a target="_@AfricaPulse" rel="noopener noreferrer">Twitter</a></Link></li>
          <li><Link href="https://instagram.com"><a target="_@AfricaPulse" rel="noopener noreferrer">Instagram</a></Link></li>
        </ul>
        <ul className="footer-links">
          <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
          <li><Link href="/terms"><a>Terms of Service</a></Link></li>
          <li><Link href="/contact"><a>Contact Us</a></Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
