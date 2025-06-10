import React, { useEffect } from 'react';
import styles from './FuturisticAbout.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { title: 'Visibility', description: 'We spotlight groundbreaking projects.' },
  { title: 'Connections', description: 'We connect entrepreneurs with partners, investors, and mentors.' },
  { title: 'Resources', description: 'We share valuable tools, insights, and opportunities.' },
  { title: 'Community', description: 'We foster a supportive network for innovators.' }
];

const FuturisticAbout = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <section className={styles.futuristicContainer}>
      {/* Section: Supporting Startups & Innovators */}
      <motion.div ref={ref} animate={controls} initial="hidden" variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }} className={styles.supportingSection}>
        <h2>Supporting Startups & Innovators</h2>
        <div className={styles.cardGrid}>
          {features.map((item, i) => (
            <motion.div key={i} className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section: Innovation Celebration */}
      <motion.div className={styles.innovationSection} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <div className={styles.rotatingBorder}>
          <div className={styles.innovationContent}>
            <h2>Where Innovation Meets Celebration</h2>
            <p>
              Be the future  partner with AfricaPulse for exclusive events that blend cutting-edge ideas with unforgettable
              experiences. From VIP showcases to groundbreaking launches, we help you turn bold visions into reality.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section: Plan an Event */}
      <motion.div className={styles.planEventSection} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <h2>Plan an Event with Us</h2>
        <p>
          Let AfricaPulse be your trusted partner in creating impactful events from planning, promotion, and execution
          to post-event engagement. Whether you’re hosting conferences, workshops, or community meetups, we provide
          the tools and support to make your vision a success.
        </p>
        <button className={styles.ctaButton}>Start Planning</button>
      </motion.div>
    </section>
  );
};

export default FuturisticAbout;
