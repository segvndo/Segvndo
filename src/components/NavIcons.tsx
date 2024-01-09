'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faAddressCard, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavIcons: React.FC = () => {

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
          <div className="nav-option hover:text-bp-secondary-color hover:">
            <FontAwesomeIcon icon={faCode} size="1x" />
          </div>
        </div>

        <div className="mb-2 lg:mb-0 lg:mr-12">
          <div className="nav-option hover:text-bp-secondary-color">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </div>
        </div>

      </div>
    </>
  );
};


export default NavIcons;