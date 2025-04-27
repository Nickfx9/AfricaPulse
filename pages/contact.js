/* pages/contact.js */

import React from 'react';
import styles from '../styles/contact.module.css'; // Import the CSS module for styling

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.infoText}>If you have any questions or inquiries, feel free to reach out to us.</p>

      <div className={styles.contactInfo}>
        <p><strong>Email:</strong> africapse@gmail.com</p>
        <p><strong>Phone:</strong> +254746000720</p>
        <p><strong>WhatsApp:</strong> 
          <a href="https://wa.me/254746000720" target="_blank" rel="noopener noreferrer">
            +254746000720
          </a>
        </p>
        <p><strong>Address:</strong> Westlands, Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default ContactPage;
