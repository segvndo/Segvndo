import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-row justify-center space-x-4">
      
      <div>
        <Link href="/">
          Home
        </Link>
      </div>

    </nav>
  );
}