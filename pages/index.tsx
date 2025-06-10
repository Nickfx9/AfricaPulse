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
        <h2>Meet the Team Driving the web3 Force</h2>

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
