import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-row  items-center justify-center space-x-4">
      
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
  );
};

export default Navigation;