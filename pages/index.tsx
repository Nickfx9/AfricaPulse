import PulseYourIdea from '../components/PulseYourIdea';
import UpcomingEvents from '../components/UpcomingEvents';
import HostEventForm from '../components/HostEventForm';
import FuturisticAbout from '../components/FuturisticAbout'; // 🔥 NEW futuristic section

const Home = () => {
  return (
    <>
      <section id="home" className="welcome">
        <h1>Is Where Africa’s heartbeat meets blockchain technology.</h1>
        <p>Pioneering the blockchain movement across Africa</p>
      </section>

      {/* 👇 REPLACED OLD ABOUT SECTION WITH THIS */}
      <FuturisticAbout />

      <section id="community">
        <PulseYourIdea />
        <UpcomingEvents />
      </section>

      <section id="join-us">
        <HostEventForm />
      </section>
<section id="team" className="team-section">
  <div className="team-title-wrapper">
    <h2 className="team-title gradient-text">⚡ Meet the Team Driving the Web3 Force</h2>
    <p className="team-description">
      At AfricaPulse, we're passionate about building bridges between communities and technology. We contribute by organizing grassroots events, supporting startups, and spreading awareness about blockchain’s potential to empower everyday lives across Africa.
    </p>
  </div>

  <div className="team-grid">
    <div className="team-member futuristic-card">
      <div className="avatar-wrapper">
        <img src="/images/founder.jpg" alt="Nicholas Mwathiki" className="team-avatar" />
        <div className="scanner-ring"></div>
      </div>
      <h3>Nicholas Mwathiki</h3>
      <p>Founder & CEO</p>
      <p>software Engineer</p>
      <div className="social-icons">
        <span className="icon">📘</span>
        <span className="icon">🐦</span>
        <span className="icon">💼</span>
      </div>
    </div>

    <div className="team-member futuristic-card">
      <div className="avatar-wrapper">
        <img src="/images/chief-director.jpg" alt="Douglas Kimathi" className="team-avatar" />
        <div className="scanner-ring"></div>
      </div>
      <h3>Douglas Kimathi</h3>
      <p>Chief Directing Manager</p>
      <div className="social-icons">
        <span className="icon">📘</span>
        <span className="icon">🐦</span>
        <span className="icon">💼</span>
      </div>
    </div>
  </div>

  {/* Floating particles */}
  <div className="floating-particles">
    {[...Array(9)].map((_, i) => (
      <span key={i} className="particle" />
    ))}
  </div>

  {/* Optional: Binary stream */}
  <div className="binary-stream">01010100110011010101011010100101</div>
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
