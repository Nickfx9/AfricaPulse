import PulseYourIdea from '../components/PulseYourIdea';
import UpcomingEvents from '../components/UpcomingEvents';
import HostEventForm from '../components/HostEventForm';

const Home = () => {
  return (
    <>
      <section id="home" className="welcome">
        <h1>Is Where Africa’s heartbeat meets blockchain technology.</h1>
        <p>Pioneering the blockchain movement across Africa</p>
      </section>

      <section id="about" className="about">
        <h1>About AfricaPulse</h1>
        <p>
          AfricaPulse is a community-driven platform dedicated to promoting events, news, and initiatives across Africa.
          Our mission is to connect people, share knowledge, and foster collaboration to drive positive change in the region.
        </p>

        <h2>Why AfricaPulse Matters</h2>
        <p>
          AfricaPulse exists to amplify innovation and unlock the immense potential across Africa’s tech and blockchain ecosystem.
          We are driven by the belief that when people connect, share ideas, and work together, extraordinary change becomes possible.
        </p>

        <h2>What We Do</h2>
        <p>
          At AfricaPulse, we’re more than just a platform — we’re a movement. We share the latest news, promote groundbreaking projects, and host events that foster collaboration and innovation. Our platform connects individuals, startups, and organizations across sectors — from tech innovators and blockchain communities to nonprofits and corporate leaders. By uniting like-minded pioneers, we empower startups to grow, scale, and drive the future of Africa's digital economy.
        </p>

        <h2>The Power of Blockchain in Africa</h2>
        <p>
          Blockchain is more than just technology — it’s a movement reshaping Africa’s future. From financial inclusion and transparent governance to supply chain innovation and digital identity, blockchain has the power to solve real-world challenges across the continent. At AfricaPulse, we believe in unlocking this potential by connecting people, sharing knowledge, and fueling innovation. Together, we can harness blockchain to build a more inclusive, equitable, and prosperous Africa.
        </p>
        <ul>
          <li><strong>Financial Inclusion:</strong> Blockchain provides access to banking for millions, enabling secure and affordable financial services for all.</li>
          <li><strong>Transparent Governance:</strong> Blockchain enhances transparency and trust in governmental processes, reducing corruption and ensuring accountability.</li>
          <li><strong>Supply Chain Innovation:</strong> By ensuring traceability and authenticity, blockchain is revolutionizing industries like agriculture and logistics.</li>
          <li><strong>Empowering Entrepreneurs:</strong> Blockchain enables new business models, supporting African startups and innovative projects across the continent.</li>
          <li><strong>Decentralized Opportunities:</strong> Blockchain creates decentralized networks, providing opportunities for individuals and communities to thrive without relying on traditional systems.</li>
        </ul>

        <h2>Supporting Startups & Innovators</h2>
        <ul>
          <li><strong>Visibility:</strong> We spotlight groundbreaking projects.</li>
          <li><strong>Connections:</strong> We connect entrepreneurs with partners, investors, and mentors.</li>
          <li><strong>Resources:</strong> We share valuable tools, insights, and opportunities.</li>
          <li><strong>Community:</strong> We foster a supportive network for innovators.</li>
        </ul>

        <h2>Where Innovation Meets Celebration</h2>
        <p>
          Be the future — partner with AfricaPulse for exclusive events that blend cutting-edge ideas with unforgettable experiences. From VIP showcases to groundbreaking launches, we help you turn bold visions into reality. Let’s create the extraordinary together.
        </p>

        <h2>Plan an Event with Us</h2>
        <p>
          Let AfricaPulse be your trusted partner in creating impactful events — from planning, promotion, and execution to post-event engagement. Whether you’re hosting conferences, workshops, or community meetups, we provide the tools and support to make your vision a success.
        </p>
      </section>

      <section id="community">
        <PulseYourIdea />
        <UpcomingEvents />
      </section>

      <section id="join-us">
        <HostEventForm />
      </section>

<section id="team" className="team-section">
  <h2>Meet the Team Driving the web3  Force</h2>

  <p style={{ maxWidth: '700px', margin: '0 auto', marginBottom: '2rem', fontSize: '0.95rem', color: '#ccc' }}>
    At AfricaPulse, we're passionate about building bridges between communities and technology. We contribute by organizing grassroots events, supporting startups, and spreading awareness about blockchain’s potential to empower everyday lives across Africa.
  </p>

  <div className="team-grid">
    <div className="team-member">
      <img src="/images/founder.jpg" alt="Nicholas Mwathiki" />
      <h3>Nicholas Mwathiki</h3>
      <p>Founder & CEO</p>
    </div>

    <div className="team-member">
      <img src="/images/chief-director.jpg" alt="Douglas Kimathi" />
      <h3>Douglas Kimathi</h3>
      <p>Chief Directing Manager</p>
    </div>
  </div>
</section>


      <section id="contact">
        <h2>Join Us</h2>
        <p>
          Interested in contributing? Please <a href="/contact">contact us</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          For inquiries, suggestions, or collaborations, visit our <a href="/contact">contact page</a>.
        </p>
      </section>
    </>
  );
};

export default Home;
