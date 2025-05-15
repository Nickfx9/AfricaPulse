import { motion } from 'framer-motion';

export default function HostEventForm() {
  return (
    <section className="bg-[#0a0f2c] text-white py-24 px-6 md:px-12 rounded-2xl mt-20 shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-orange-400">
          Host Your Own Event
        </h2>

        <form 
          action="https://formspree.io/f/mqaqdwva"
          method="POST"
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <input name="event_name" type="text" required placeholder="Event Name" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />
            <input name="organizer_name" type="text" required placeholder="Organizer Name" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />
            <input name="email" type="email" required placeholder="Contact Email" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />
            <input name="phone_number" type="tel" required placeholder="Phone Number" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <select name="event_type" required className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition">
              <option value="">Select Event Type</option>
              <option>Workshop</option>
              <option>Meetup</option>
              <option>Hackathon</option>
              <option>Panel Discussion</option>
            </select>
            <input name="event_date" type="date" required className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />
          </div>

          <input name="location" type="text" required placeholder="Location (City/Country or Online)" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition" />

          <textarea name="description" required rows="5" placeholder="Brief description & goals of your event…" className="bg-[#12193e] p-5 rounded-lg w-full outline-none text-xl focus:ring-2 ring-orange-400 transition"></textarea>

          <label className="flex items-center space-x-3 text-xl">
            <input name="sponsorship" type="checkbox" value="Yes" className="h-6 w-6 text-orange-500" />
            <span>We’re seeking sponsorship for this event</span>
          </label>

          <button type="submit" className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white py-4 px-8 rounded-xl font-bold text-xl transition shadow-md hover:shadow-lg mt-6">
            🚀 Submit Event Request
          </button>
        </form>
      </motion.div>
    </section>
  );
}
