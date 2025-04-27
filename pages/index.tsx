import React from 'react';
import Layout from '../components/Layout';
import PulseYourIdea from '../components/PulseYourIdea';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <Layout>
      <section className="welcome">
        <h1>Welcome to AfricaPulse 🌍✨</h1>
        <p>Your hub for blockchain innovation across Africa.</p>
      </section>

      <section className="about">
        <h1>About AfricaPulse</h1>
        <p>AfricaPulse is a community-driven platform dedicated to promoting events, news, and initiatives across Africa. Our mission is to connect people, share knowledge, and foster collaboration to drive positive change in the region.</p>

        <h2>Our Mission</h2>
        <p>To empower communities by providing a platform for sharing information, promoting events, and facilitating networking opportunities. We aim to bridge the gap between different regions and cultures within Africa, fostering a sense of unity and collective growth.</p>

        <h2>Our Vision</h2>
        <p>Our vision is to see a connected Africa where knowledge and opportunities flow freely across borders. We believe in the power of collaboration and aim to be the leading platform for connecting individuals and organizations working towards a sustainable and prosperous future for the continent.</p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Inclusivity:</strong> We welcome and support diverse perspectives and backgrounds.</li>
          <li><strong>Collaboration:</strong> We believe in the strength of working together to achieve common goals.</li>
          <li><strong>Integrity:</strong> We prioritize honesty, transparency, and accountability in all our actions.</li>
          <li><strong>Innovation:</strong> We encourage creativity and the pursuit of new ideas to drive progress.</li>
        </ul>

        <h2>Our Team</h2>
        <p>Our team is composed of passionate individuals who are committed to making a difference. We come from diverse backgrounds and bring a wealth of experience to the table. Meet some of our key team members:</p>

        <ul>
          <li><strong>Nicholas Mwathiki:</strong> Founder & CEO - Nicholas is a visionary leader with over 5 years of experience in community development and digital innovation.</li>
          <li><strong>John Smith:</strong> Chief Operating Officer - John has a background in operations management and has worked in various industries across Africa.</li>
          <li><strong>Mary Johnson:</strong> Head of Marketing - Mary is a marketing expert with a passion for storytelling and brand building.</li>
          <li><strong>Ahmed Khan:</strong> Lead Developer - Ahmed is a skilled software engineer with a focus on building scalable and user-friendly platforms.</li>
        </ul>

        <h2>Hold an Exclusive Event with Us</h2>
        <p>At AfricaPulse, we offer a unique opportunity for companies, whether in web3, tech, or any other industry, to hold exclusive events with us. Our platform provides the perfect setting to engage with your audience, showcase your innovations, and foster meaningful connections. Contact us to learn more about how we can help you host an unforgettable event.</p>

        <h2>Plan an Event with Us</h2>
        <p>Planning an event? Let AfricaPulse be your partner in creating a successful and impactful event. Our experienced team is here to support you every step of the way, from planning and promotion to execution and follow-up. Reach out to us to start planning your next event.</p>

        <h2>Join Us</h2>
        <p>We are always looking for passionate and talented individuals to join our team. If you are interested in contributing to AfricaPulse, please <a href="/contact">contact us</a>.</p>

        <h2>Contact Us</h2>
        <p>For any inquiries, suggestions, or collaborations, feel free to reach out to us through our <a href="/contact">contact page</a>. We would love to hear from you!</p>
      </section>

      <PulseYourIdea />
      <UpcomingEvents />
    </Layout>
  );
};

export default Home;
