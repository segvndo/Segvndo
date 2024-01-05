'use client';
import React from 'react';
import Link from 'next/link';
import SoscMedia from './SoscMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import bee from '../../assets/bee.jpg';

type NavigationProps = {};

const Navigation: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container">
        <nav className="flex flex-col lg:flex-row items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-16 bg-grey-500 text-2xl pr-6 font-serif text-bp-primary-color bg-yellow-300 p-8 w-full h-18">

          {/* <SoscMedia /> */}

          <div className="fixed left-0 top-0 p-4 ml-4">
            <div className="relative">
              <Image src={bee} alt="Bee Logo" height={60} width={70} className="rounded-full mb-8" />
              {/* <h1 className="absolute bottom-0 left-2 mb-2 lg:mb-0 lg:mr-4 text-xs text-bp-primary-color">I am Bea</h1> */}
            </div>
          </div>


          {/* Burger Icon for Small Screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-bp-primary-color" size="2x" />
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} `}>
            <div className="mb-2 lg:mb-0 lg:mr-12">
              <Link href="/" className="hover:text-bp-secondary-color">
                Home
              </Link>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <Link href="/About" className="hover:text-bp-secondary-color">
                About
              </Link>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <Link href="/projects" className="hover:text-bp-secondary-color">
                Projects
              </Link>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <Link href="/skills" className="hover:text-bp-secondary-color">
                Skills
              </Link>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <Link href="/contact" className="hover:text-bp-secondary-color">
                Contact
              </Link>
            </div>
            
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;