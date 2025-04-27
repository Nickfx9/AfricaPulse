import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 AfricaPulse. All rights reserved.</p>
        <p>Your number one marketing agency</p>

        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>

        <ul className="footer-links">
          <li>
            <Link href="/privacy" legacyBehavior>
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms" legacyBehavior>
              <a>Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

      