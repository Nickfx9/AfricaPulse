// components/UpcomingEvents.js

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, MapPin, Calendar, ArrowRight } from 'lucide-react';
import styles from './UpcomingEvents.module.css';

const events = [
  {
    title: 'AfricaPulse Nairobi Community Engagement',
    description: "Join builders and innovators to connect and learn about blockchain opportunities.",
  
    type: 'Physical',
    location: 'Nairobi, Kenya',
    link: '/events',
  },
];

export default function UpcomingEvents() {
  const event = events[0];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles['upcoming-events-section']}>
      <div
        className={`${styles['upcoming-card']} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* SVG Circuit Overlay */}
        <svg
          className={styles['circuit-overlay']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L200 100 M100 0 L100 200"
            stroke="lime"
            strokeWidth="0.5"
            strokeDasharray="4 2"
          />
        </svg>

        {/* Status Indicator */}
        <div className={styles['status-indicator']}>
          <span className={styles['pulse-dot']}></span>
          <Zap size={16} color="#34d399" className={styles['spin-slow']} />
          <span className={styles['status-text']}>UPCOMING EVENT</span>
        </div>

        {/* Event Title */}
        <h3 className={styles['title']}>
          AfricaPulse Nairobi <br />
          <span className={styles['gradient-text']}>Community Hangout</span>
        </h3>

        {/* Event Details */}
        <div className={styles['event-details']}>
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
        <div className={styles['event-details']}>
          <Calendar size={14} />
          <span>{new Date(event.date).toDateString()}</span>
        </div>

        {/* CTA Button */}
        <Link href={event.link}>
          <button className={styles['cta-button']}>
            <span>See All Events</span>
            <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            <span className={styles['shine']}></span>
          </button>
        </Link>

        {/* Decorative Pulsing Elements */}
        <div className={`${styles['decorative-pulse']} ${styles['top-right']}`}></div>
        <div className={`${styles['decorative-pulse']} ${styles['bottom-left']}`}></div>
      </div>
    </section>
  );
}
