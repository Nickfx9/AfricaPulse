// pages/events.js
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Camera,
  ArrowRight
} from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/eventsData';

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const eventsToDisplay = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="events-container">
      <div className="events-header">
        <Calendar className="events-icon" />
        <h1 className="events-title">Events Hub</h1>
        <p className="events-subtitle">
          Discover upcoming and past events within our AfricaPulse community.
        </p>

        <div className="events-tabs">
          <button
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>
      </div>

      {eventsToDisplay.length === 0 ? (
        <div className="empty-state">No events available in this category.</div>
      ) : (
        <div className="events-grid">
          {eventsToDisplay.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                {event.featured && (
                  <div className="featured-badge">
                    <Star size={16} /> Featured
                  </div>
                )}
              </div>
              <div className="event-content">
                <h2 className="event-title-text">{event.title}</h2>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div className="detail-item">
                    <Clock size={16} /> {event.time}
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} /> {event.location}
                  </div>
                  <div className="detail-item">
                    <Users size={16} /> {event.attendees} attendees
                  </div>
                </div>
                <div className={`event-type ${event.type.toLowerCase()}`}>
                  {event.type}
                </div>

                {/* ✅ UPDATED: Working View Details Link */}
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-details-button"
                >
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cta-section">
  <h2>Host Your Event with AfricaPulse</h2>
  <p>Reach your audience by hosting your event on our platform.</p>
  <a href="/#host-event">
    <button className="cta-button">Host an Event</button>
  </a>
</div>

    </div>
  );
}
