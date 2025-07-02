// data/eventsData.js

const upcomingEventsRaw = [
  {
    id: 1,
    title: "BLOCK MEETS",
    date: "2025-07-26",
    time: "2:00 PM",
    location: "Workstyle,onepark,Nairobi, Kenya",
    type: "meetup",
    attendees: 150,
    image: "/images/event1.jpg",
    description: "Join leading voices in Africa's blockchain revolution for a day of insights, networking, and vision building.",
    featured: true,
    link: "https://blockwisely.xyz/upcoming-events/blockmeet-ke-empowering-developers-to-build-beyond-code-1789058"
  },
  {
    id: 2,
    title: "THE EA EXPERIENCE",
    date: "2025-07-12",
    time: "2:00 PM",
    location: "premium inn, Mombasa, kenya",
    type: "community meetup",
    attendees: 80,
    image: "/images/event2.jpg",
    description: "Binance team will host a community meetup in mombasa to explore all things Blockchain and Web3.",
    featured: false,
    link: "https://binance.events/GVPwAa"
  },
  {
    id: 3,
    title: "BITCOIN UNCOFERENCE 002",
    date: "2025-07-12",
    time: "4:00 PM",
    location: "Sarit Expo Center, NAIROBI",
    type: "conference",
    attendees: 40,
    image: "/images/event3.jpg",
    description: "Explore how blockchain supports Africa's sustainable energy transition with practical case studies.",
    featured: false,
    link: "https://lu.ma/pmjl92gj"
  }
];

const pastEventsRaw = [
  {
    id: 4,
    title: "AfricaPulse Hackathon",
    date: "2025-05-10",
    time: "9:00 AM",
    location: "Lagos, Nigeria",
    type: "Hackathon",
    attendees: 200,
    image: "/images/event4.jpg",
    description: "48-hour blockchain hackathon bringing Africa's best talents together to build impactful projects.",
    featured: true,
  },
  {
    id: 5,
    title: "Health-tech Solution Open Hackathon",
    date: "2025-07-03",
    time: "11:00 AM",
    location: "Africa's Talking Limited 23 Apple croos Road, NAIROBI",
    type: "HACKATHON",
    attendees: 100,
    image: "/images/event5.jpg",
    description: "Unlocking blockchain's potential for small businesses across Africa through actionable strategies.",
    featured: false,
  }
];

// Utility: parse YYYY-MM-DD and compare with today
const isPastEvent = (eventDate) => {
  const eventTime = new Date(eventDate).setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  return eventTime < today;
};

// Auto-sort
export const upcomingEvents = upcomingEventsRaw.filter(event => !isPastEvent(event.date));
export const pastEvents = [...pastEventsRaw, ...upcomingEventsRaw.filter(event => isPastEvent(event.date))];
