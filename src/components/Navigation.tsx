'use client';
import React from 'react';
import Link from 'next/link';
import SoscMedia from './SoscMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faAddressCard, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import bee from '../../assets/bee.jpg';

type NavigationProps = {};

const Navigation: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navContainer = document.querySelector('.nav-container');
      if (navContainer && !navContainer.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="nav-container">
        <nav className="flex flex-col lg:flex-row items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-16 bg-grey-500 text-2xl pr-6 font-serif text-bp-primary-color bg-yellow-300 p-8 w-full h-24">

          {/* <SoscMedia /> */}

          <div className="fixed left-0 top-0 p-4 ml-4">
            <div className="relative">
              <Image src={bee} alt="Bee Logo" height={60} width={70} className="rounded-full mb-8" />

            </div>
          </div>


          {/* Burger Icon for Small Screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-bp-primary-color " size="1x" />
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} `}>
            <div className="mb-2 lg:mb-0 lg:mr-12">
              <div className="nav-option hover:text-bp-secondary-color">
                <FontAwesomeIcon icon={faHouse} size="1x" />
              </div>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <div className="nav-option hover:text-bp-secondary-color">
                <FontAwesomeIcon icon={faAddressCard} size="1x" />
              </div>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <div className="nav-option hover:text-bp-secondary-color">
                <FontAwesomeIcon icon={faBriefcase} size="1x" />
              </div>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <div className="nav-option hover:text-bp-secondary-color">
                <FontAwesomeIcon icon={faCode} size="1x" />
              </div>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-12">
              <div className="nav-option hover:text-bp-secondary-color">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </div>
            </div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;