import React from 'react';
import Link from 'next/link';
import SoscMedia from './SoscMedia';

const Navigation: React.FC = () => {
  return (
    <>
      <div className="nav-container">
        <nav
          className="flex flex-row items-center justify-end space-x-16 bg-grey-500 text-2xl pr-6 font-serif text-black bg-yellow-500 p-8 w-full h-18">

          <SoscMedia>
          </SoscMedia>
          <div>
            <Link
              href="/"
              className="hover:text-white">
              Home
            </Link>
          </div>

          <div>
            <Link
              href="/about"
              className="hover:text-white">
              About
            </Link>
          </div>

          <div>
            <Link
              href="/projects"
              className="hover:text-white">
              Projects
            </Link>
          </div>

          <div>
            <Link
              href="/contact"
              className="hover:text-white">
              Contact
            </Link>
          </div>



        </nav>
      </div>
    </>
  );
};

export default Navigation;