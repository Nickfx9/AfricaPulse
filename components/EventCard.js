// components/EventCard.js
export default function EventCard({ event }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{event.date}</p>
        <p className="mt-4 text-gray-700">{event.description}</p>
        <div className="mt-6 text-right">
          <a
            href="#"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
  