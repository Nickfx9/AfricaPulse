import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./AfricaPulse.module.css";

const AfricaPulse = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [mounted, setMounted] = useState(false);
  const visionRef = useRef(null);

  const images = ["group1.jpg", "group2.jpg", "group3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setShowSecondMessage(true);
  };

  const handleExploreClick = () => {
    if (visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={styles.container}>
        {/* LEFT SIDE - VISION 2030 FUTURISTIC TEXT */}
        <div className={styles.leftText} onClick={handleClick}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.visionBadge}>
              VISION 2030 • POWERED BY INNOVATION
            </div>

            <h1 className={styles.title}>BLOCKCHAIN INNOVATION IN AFRICA</h1>
            <p className={styles.subtitle}>Empowering Africa's Future Techies</p>
            <p className={styles.subtitle}>ONE INNOVATION AT A TIME</p>
            <p className={styles.keywords}>a movement that starts with few voices</p>
            <p className={styles.keywords}>Blockchain. Ideas. Community.</p>
            <p className={styles.description}>
              Our gateway to innovative African ideas and technology.
            </p>
            <p className={styles.description}>
              Discover exciting projects, community impact,<br />
              and feel the pulse of African innovation.
            </p>

            <button
              type="button"
              className={styles.exploreBtn}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleExploreClick();
              }}
            >
              🔍 Explore Now
            </button>

            {showSecondMessage && (
              <motion.div
                className={styles.secondMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, ease: "easeOut", delay: 1 }}
              ></motion.div>
            )}
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE SLIDESHOW */}
        <div className={`${styles.rightImage} ${styles.animateBackground} relative overflow-hidden`}>
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={`/images/${images[currentImageIndex]}`}
                alt={`Community group ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: "cover" }}
                quality={80}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.overlay} />
        </div>
      </div>

      {/* Our Mission Section */}
      <section className={styles.missionSection}>
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
                  src={`/images/mission${num}.webp`}
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
      <section id="vision" className={styles.visionSection} ref={visionRef}>
        <div className={styles.visionHeader}>
          <div className={styles.visionBadge}>We're the future builders</div>
          <h2 className={styles.visionTitle}>Our Journey Forward</h2>
          <p className={styles.visionText}>
            AfricaPulse envisions a connected, innovative Africa by 2030. We empower
            communities with blockchain, digital collaboration, and borderless innovation.
          </p>
        </div>

        {mounted && (
          <motion.div
            className={styles.visionGrid}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Digital Innovation Conference",
                stats: "500+ Attendees · 12 Countries · 24 Speakers",
                description: "AI, blockchain, and digital transformation focus",
                image: "vision1.jpg",
              },
              {
                title: "AfricaPulse Excellence Awards",
                stats: "300+ Nominees · 15 Categories · 50 Winners",
                description: "Celebrating tech achievements and innovation",
                image: "vision2.jpg",
              },
              {
                title: "Pan-African Tech Gathering",
                stats: "800+ Participants · 20 Cities · Networking",
                description: "Building cross-border connections",
                image: "vision3.jpg",
              },
              {
                title: "Future Tech Showcase",
                stats: "100+ Demos · 25 Startups · Live Innovation",
                description: "Cutting-edge tech demonstrations",
                image: "vision4.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.visionCard}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardStats}>{item.stats}</p>
                <p className={styles.cardDesc}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div id="about" className={styles.futureSection}>
          <h2 className={styles.futureTitle}>ABOUT US</h2>
          <h2 className={styles.futureTitle}>Shaping Tomorrow, Today</h2>
          <p className={styles.futureText}>
            Join us in building a decentralized, inclusive, and tech-forward Africa by 2030.
            AfricaPulse is a visionary initiative where Africa's heartbeat connects with the future of Web3. We are driven by a mission to empower communities through blockchain innovation, digital inclusion, and grassroots collaboration.

            We organize on-the-ground events, support early-stage African startups, and create opportunities for builders, creators, and changemakers to thrive in the decentralized era. we're more than a platform it's a movement bridging technology and people to shape a stronger, unified digital future.

            Whether you're a developer, entrepreneur, or dreamer you belong here.
            This is your pulse. This is Africa's moment.
          </p>
          <button className={styles.futureButton}>Join Our Vision</button>
        </div>
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
    </div>
  );
};

export default AfricaPulse;
