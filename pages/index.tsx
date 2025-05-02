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
        <p>
          AfricaPulse is a community-driven platform dedicated to promoting events, news, and initiatives across Africa.
          Our mission is to connect people, share knowledge, and foster collaboration to drive positive change in the region.
        </p>

        <h2>Why AfricaPulse Matters</h2>
        <p>
          AfricaPulse exists to amplify innovation and unlock the immense potential across Africa’s tech and blockchain ecosystem.
          We are driven by the belief that when people connect, share ideas, and work together, extraordinary change becomes possible.
          Our platform is designed to empower changemakers, foster cross-border collaboration, and accelerate progress that benefits
          communities across the continent. Whether you’re an entrepreneur, a developer, a creative, or simply passionate about
          Africa’s future — AfricaPulse is your home.
        </p>

        <h2>What We Do</h2>
        <p>
          At AfricaPulse, we transform ideas into action. We share the latest news, promote groundbreaking projects, and host events
          that bring people together. Our platform connects individuals and organizations working across sectors — from tech startups
          and nonprofits to blockchain communities and innovators. By facilitating knowledge exchange, amplifying diverse voices, and
          sparking meaningful collaborations, we help build a stronger, more connected Africa.
        </p>

        <h2>The Power of Blockchain in Africa</h2>
        <p>
          Blockchain is more than just technology — it’s a movement reshaping Africa’s future. From financial inclusion and
          transparent governance to supply chain innovation and digital identity, blockchain has the power to solve real-world
          challenges across the continent. At AfricaPulse, we believe in unlocking this potential by connecting people, sharing
          knowledge, and fueling innovation. Together, we can harness blockchain to build a more inclusive, equitable, and prosperous
          Africa.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team is composed of passionate individuals who are committed to making a difference. We come from diverse backgrounds
          and bring a wealth of experience to the table. Meet some of our key team members:
        </p>

        <ul>
          <li>
            <strong>Nicholas Mwathiki:</strong> Founder & CEO - Nicholas is a visionary leader with over 5 years of experience in
            community development and digital innovation.
          </li>
          <li>
            <strong>Mary Johnson:</strong> Head of Marketing - Mary is a marketing expert with a passion for storytelling and brand building.
          </li>
        </ul>

        <h2>Hold an Exclusive Event with Us</h2>
        <p>
          At AfricaPulse, we offer a unique opportunity for companies, whether in web3, tech, or any other industry, to hold exclusive
          events with us. Our platform provides the perfect setting to engage with your audience, showcase your innovations, and foster
          meaningful connections. Contact us to learn more about how we can help you host an unforgettable event.
        </p>

        <h2>Plan an Event with Us</h2>
        <p>
          Planning an event? Let AfricaPulse be your partner in creating a successful and impactful event. Our experienced team is here
          to support you every step of the way, from planning and promotion to execution and follow-up. Reach out to us to start planning
          your next event.
        </p>

        <h2>Join Us</h2>
        <p>
          We are always looking for passionate and talented individuals to join our team. If you are interested in contributing to
          AfricaPulse, please <a href="/contact">contact us</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any inquiries, suggestions, or collaborations, feel free to reach out to us through our <a href="/contact">contact page</a>.
          We would love to hear from you!
        </p>
      </section>

      <PulseYourIdea />
      <UpcomingEvents />
    </Layout>
  );
};

export default Home;
