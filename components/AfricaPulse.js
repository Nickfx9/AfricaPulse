import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./AfricaPulse.module.css";
import PulseYourIdea from "./PulseYourIdea";

const AfricaPulse = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [mounted, setMounted] = useState(false);
  const missionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setShowSecondMessage(true);
  };

  const handleExploreClick = () => {
    // Scroll smoothly to the mission section
    if (missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={styles.container}>
        {/* LEFT SIDE - FUTURISTIC TEXT */}
        <div className={styles.leftText}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <h1 className={styles.title}> Blockchain innovation in africa </h1>
            <p className={styles.subtitle}>Empowering Africa's Future techies </p>
            <p className={styles.subtitle}>One Innovation at a Time</p>
            <p className={styles.keywords}> Blockchain.  Ideas.  Community.</p>
            <p>Our gateway to innovative African ideas and technology.</p>
            <p>Discover exciting projects, community impact, and the pulse of African innovation.</p>

            <button
              className={styles.exploreBtn}
              onClick={(e) => {
                e.stopPropagation();
                handleExploreClick();
              }}
            >
              Explore Now
            </button>

            {showSecondMessage && (
              <motion.div
                className={styles.secondMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut", delay: 1 }}
              >
                Your hub for <br />
                blockchain innovation across Africa <br />
                and experience the future
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className={`${styles.half} ${styles.rightImage}`}></div>
        <div className={styles.overlay}></div>
      </div>

{/* Our Mission Section */}
<section ref={missionRef} className={styles.missionSection}>
  <h2 className={styles.missionTitle}>Our Mission</h2>
  <p className={styles.missionText}>
    To empower communities by providing a platform for sharing information,
    promoting events, and facilitating networking opportunities. We aim to bridge
    the gap between different regions and cultures within Africa, fostering a sense
    of unity and collective growth.
  </p>

  {mounted && (
    <motion.div
      className={styles.missionGallery}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      viewport={{ once: true }}
    >
      {[
        {
          num: 1,
          caption: "Community Collaboration",
          description: "AfricaPulse is the leading digital platform dedicated to driving blockchain innovation across Africa. By connecting developers, entrepreneurs, investors, and communities. AfricaPulse serves as a vibrant hub where ideas transform into impactful solutions.."
        },
        {
          num: 2,
          caption: "Tech Empowerment",
          description: "Providing access to technological resources and knowledge to empower individuals and communities."
        },
        {
          num: 3,
          caption: "Pan-African Unity",
          description: "Fostering a sense of unity and collaboration across African nations and cultures."
        },
        {
          num: 4,
          caption: "Innovation Growth",
          description: "Supporting the growth of innovative ideas and startups to drive progress and economic development."
        },
      ].map(({ num, caption, description }) => (
        <motion.div
          key={num}
          className={styles.missionItem}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={`/images/mission${num}.jpg`}
            alt={`Mission ${num}`}
            className={styles.missionCircleImage}
          />
          <p className={styles.missionCaption}>{caption}</p>
          <p className={styles.missionDescription}>{description}</p>
        </motion.div>
      ))}
    </motion.div>
  )}
</section>
      {/* Our Vision Section */}
      <section className={styles.visionSection}>
        <h2 className={styles.visionTitle}>Our Vision</h2>
        <p className={styles.visionText}>
          Our vision is to see a connected Africa where knowledge and opportunities flow
          freely across borders. We believe in the power of collaboration and aim to be
          the leading platform for connecting individuals and organizations working
          towards a sustainable and prosperous future for the continent.
        </p>

        {mounted && (
          <motion.div
            className={styles.visionImages}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4].map((num) => (
              <motion.img
                key={num}
                src={`/images/vision${num}.jpg`}
                alt={`Vision ${num}`}
                className={styles.visionImage}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}
      </section>

     {/* Our Values Section */}
<section className={styles.valuesSection}>
  <h2 className={styles.valuesTitle}>Our Values</h2>
  <div className={styles.valuesList}>
    <div className={styles.valueItem}>
      <h3>Inclusivity</h3>
      <p>We welcome and support diverse perspectives and backgrounds.</p>
    </div>
    <div className={styles.valueItem}>
      <h3>Collaboration</h3>
      <p>We believe in the strength of working together to achieve common goals.</p>
    </div>
    <div className={styles.valueItem}>
      <h3>Integrity</h3>
      <p>We prioritize honesty, transparency, and accountability in all our actions.</p>
    </div>
    <div className={styles.valueItem}>
      <h3>Innovation</h3>
      <p>We encourage creativity and the pursuit of new ideas to drive progress.</p>
    </div>
  </div>
</section>

     {/* Impact Highlights Section */}
<section className={styles.impactSection}>
  <div className={styles.backgroundOverlay} />
  <h2 className={styles.impactTitle}>Impact Highlights</h2>
  <div className={styles.impactGrid}>
    <div className={`${styles.impactCard} ${styles.topLeft}`}>
      <div className={styles.emoji}>🚀</div>
      <div className={styles.impactNumber}>300+</div>
      <div className={styles.impactLabel}>Blockchain Startups</div>
    </div>
    <div className={`${styles.impactCard} ${styles.topRight}`}>
      <div className={styles.emoji}>🌍</div>
      <div className={styles.impactNumber}>50+</div>
      <div className={styles.impactLabel}>African Countries Connected</div>
    </div>
    <div className={`${styles.impactCard} ${styles.bottomLeft}`}>
      <div className={styles.emoji}>🎯</div>
      <div className={styles.impactNumber}>2000+</div>
      <div className={styles.impactLabel}>Blockchain Events Hosted</div>
    </div>
    <div className={`${styles.impactCard} ${styles.bottomRight}`}>
      <div className={styles.emoji}>🤝</div>
      <div className={styles.impactNumber}>500+</div>
      <div className={styles.impactLabel}>Collaborations & Partners</div>
    </div>
  </div>
  <div className={styles.orbsContainer}>
    {[...Array(8)].map((_, i) => (
      <div key={i} className={`${styles.orb} ${styles[`orb${i}`]}`} />
    ))}
  </div>
</section>



      {/* Pulse Your Idea Section */}
      
    </div>
  );
};

export default AfricaPulse;