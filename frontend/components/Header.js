import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <Image src={logo} alt="AfricaPulse Logo" width={50} height={50} />
              </a>
            </Link>
          </li>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/events"><a>Events</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
