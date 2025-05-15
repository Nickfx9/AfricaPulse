import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AfricaPulse 🌍</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#join-us">Join Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
