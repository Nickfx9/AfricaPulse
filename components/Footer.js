import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="footer-content max-w-7xl mx-auto px-4 py-8">
        {/* Top section: copyright + policies */}
        <div className="mb-6">
          <p className="text-sm">&copy; 2025 AfricaPulse. All rights reserved.</p>
          <p className="text-sm mb-4">Your number one marketing agency</p>

          <ul className="footer-links flex flex-wrap space-x-4">
            <li>
              <Link href="/privacy" legacyBehavior>
                <a className="hover:text-white">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms" legacyBehavior>
                <a className="hover:text-white">Terms of Service</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:text-white">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Purple section: social + community + founder */}
        <div className="bg-purple-700 text-white px-4 py-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            {/* Social links on the left */}
            <ul className="flex space-x-4 mb-4 md:mb-0">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  Instagram
                </a>
              </li>
            </ul>

            {/* Community + contact on the right */}
            <div className="text-center md:text-right">
              <p className="mb-1 font-semibold">Join Our Community!</p>
              <p className="mb-1">Follow us on X @africapulse</p>
              <p>Email us: africapse@gmail.com</p>
            </div>
          </div>

          {/* Founder info below */}
          <div className="mt-4 text-center">
            <p>Founder & CEO: Nicholas Mwathiki</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
