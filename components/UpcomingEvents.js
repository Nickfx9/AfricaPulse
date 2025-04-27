import React from 'react';

const events = [
  {
    title: 'Blockchain for Development - Zoom Meetup',
    date: '2025-05-01',
    type: 'Online',
    location: 'Zoom',
    link: 'https://zoom.us/j/1234567890',
  },
  {
    title: 'AfricaPulse Nairobi Community Hangout',
    date: '2025-05-05',
    type: 'Physical',
    location: 'Nairobi, Kenya',
    link: '#',
  },
  {
    title: 'Smart Contracts Workshop - Zoom',
    date: '2025-05-10',
    type: 'Online',
    location: 'Zoom',
    link: 'https://zoom.us/j/0987654321',
  },
];

const UpcomingEvents = () => {
  const today = new Date();

  const upcoming = events.filter(event => new Date(event.date) >= today);
  const past = events.filter(event => new Date(event.date) < today);

  return (
    <section className="py-10 px-5 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {upcoming.length ? upcoming.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="mt-2 text-gray-600">📍 {event.location}</p>
            <p className="text-gray-600">🗓️ {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-600">📡 {event.type}</p>
            {event.link && (
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block hover:underline">
                Join Event
              </a>
            )}
          </div>
        )) : <p className="text-center col-span-2">No upcoming events at the moment.</p>}
      </div>

      {past.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-center mt-10 mb-6">📜 Past Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {past.map((event, index) => (
              <div key={index} className="bg-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-700">📍 {event.location}</p>
                <p className="text-gray-700">🗓️ {new Date(event.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default UpcomingEvents;
