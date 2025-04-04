import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
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
          <li><strong>Nicholas mwathiki:</strong> Founder & CEO -Nicholas is a visionary leader with over 20 years of experience in community development and digital innovation.</li>
          <li><strong>Douglas Kimathi:</strong> Chief Operating Officer - Douglas has a background in operations management and has worked in various industries across Africa.</li>
          <li><strong>Mary Johnson:</strong> Head of Marketing - Mary is a marketing expert with a passion for storytelling and brand building.</li>
          <li><strong>Dennis Khan:</strong> Lead Developer - Dennis is a skilled software engineer with a focus on building scalable and user-friendly platforms.</li>
        </ul>
        
        <h2>Join Us</h2>
        <p>We are always looking for passionate and talented individuals to join our team. If you are interested in contributing to AfricaPulse, please <Link href="/contact"><a>contact us</a></Link>.</p>
        
        <h2>Contact Us</h2>
        <p>For any inquiries, suggestions, or collaborations, feel free to reach out to us through our <Link href="/contact"><a>contact page</a></Link>. We would love to hear from you!</p>
      </section>
    </Layout>
  );
};

export default About;
