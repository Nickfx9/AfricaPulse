import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HostEventForm() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
        setSubmitted(true);
      }
    }, 1000); // Wait to ensure Formspree processes
  };

  return (
    <section id="host-event" className="futuristic-form" style={{ padding: '4rem 1.5rem', background: '#0a0f2c', color: 'white' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="host-form-container"
      >
        {/* You can remove this empty section if unused */}
        {/* <section id="events"></section> */}

        <div className="scanline"></div>
        <h2 className="pulse-title">Host Your Own Event</h2>

        <form
          ref={formRef}
          action="https://formspree.io/f/mqaqdwva"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="form-grid"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}
        >
          <div className="form-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input name="event_name" type="text" required placeholder="Event Name" className="futuristic-input" />
            <input name="organizer_name" type="text" required placeholder="Organizer Name" className="futuristic-input" />
          </div>

          <div className="form-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input name="email" type="email" required placeholder="Contact Email" className="futuristic-input" />
            <input name="phone_number" type="tel" required placeholder="Phone Number" className="futuristic-input" />
          </div>

          <div className="form-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <select name="event_type" required className="futuristic-input" style={{ flex: 1 }}>
              <option value="">Select Event Type</option>
              <option>Workshop</option>
              <option>Meetup</option>
              <option>Hackathon</option>
              <option>Panel Discussion</option>
            </select>
            <input name="event_date" type="date" required className="futuristic-input" style={{ flex: 1 }} />
          </div>

          <input name="location" type="text" required placeholder="Location (City/Country or Online)" className="futuristic-input" />

          <textarea
            name="description"
            required
            rows="5"
            placeholder="Brief description & goals of your event…"
            className="futuristic-input"
          ></textarea>

          <label className="custom-checkbox" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input name="sponsorship" type="checkbox" value="Yes" />
            <span className="checkmark"></span>
            We’re seeking sponsorship for this event
          </label>

          <button type="submit" className="futuristic-button">
            Submit Event Request
          </button>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ color: '#00ffff', marginTop: '1rem', textAlign: 'center' }}
          >
            ✅ Your request has been submitted!
          </motion.p>
        )}

        {/* Invisible iframe for formspree success redirect */}
        <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
      </motion.div>
    </section>
  );
}
