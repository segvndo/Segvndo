import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <div className="nav-container bg-yellow-500 p-8 w-full h-18">
      <nav className="flex flex-row items-center justify-center space-x-4 bg-grey-500">

        <div>
          <Link href="/">
            Home
          </Link>
        </div>

        <div>
          <Link href="/about">
            About
          </Link>
        </div>

        <div>
          <Link href="/projects">
            Projects
          </Link>
        </div>

        <div>
          <Link href="/contact">
            Contact
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navigation;