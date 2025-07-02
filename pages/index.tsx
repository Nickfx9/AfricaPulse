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
    {/* Nicholas Mwathiki */}
    <div className="team-member futuristic-card">
      <div className="avatar-wrapper">
        <img src="/images/founder.jpg" alt="Nicholas Mwathiki" className="team-avatar" />
        <div className="scanner-ring"></div>
      </div>
      <h3>Nicholas Mwathiki</h3>
      <p>Founder & CEO</p>
      <p>software Engineer</p>
      <div className="social-icons">
        <a href="https://x.com/mwathikiN80725" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 4.01c-.77.35-1.6.59-2.46.69a4.25 4.25 0 0 0 1.86-2.35 8.48 8.48 0 0 1-2.7 1.03 4.23 4.23 0 0 0-7.2 3.86 12 12 0 0 1-8.7-4.4 4.23 4.23 0 0 0 1.31 5.64A4.2 4.2 0 0 1 2.8 8v.05a4.23 4.23 0 0 0 3.39 4.14 4.23 4.23 0 0 1-1.91.07 4.23 4.23 0 0 0 3.95 2.94 8.5 8.5 0 0 1-5.26 1.81c-.34 0-.67-.02-1-.06a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22 4.01Z" />
          </svg>
        </a>
        <a href="https://instagram.com/ItsNickFx" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/nicholas-mwathiki-2491a7341" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </div>

    {/* Douglas Kimathi */}
    <div className="team-member futuristic-card">
      <div className="avatar-wrapper">
        <img src="/images/chief-director.jpg" alt="Douglas Kimathi" className="team-avatar" />
        <div className="scanner-ring"></div>
      </div>
      <h3>Douglas Kimathi</h3>
      <p>Chief Directing Manager</p>
      <div className="social-icons">
        <a href="https://x.com/douglaskimathithi" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 4.01c-.77.35-1.6.59-2.46.69a4.25 4.25 0 0 0 1.86-2.35 8.48 8.48 0 0 1-2.7 1.03 4.23 4.23 0 0 0-7.2 3.86 12 12 0 0 1-8.7-4.4 4.23 4.23 0 0 0 1.31 5.64A4.2 4.2 0 0 1 2.8 8v.05a4.23 4.23 0 0 0 3.39 4.14 4.23 4.23 0 0 1-1.91.07 4.23 4.23 0 0 0 3.95 2.94 8.5 8.5 0 0 1-5.26 1.81c-.34 0-.67-.02-1-.06a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22 4.01Z" />
          </svg>
        </a>
        <a href="https://instagram.com/its_nkim" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/douglas-kimathi-6041681ba" target="_blank" rel="noopener noreferrer" className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
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
