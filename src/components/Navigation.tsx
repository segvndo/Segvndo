'use client';
import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faHouse, faAddressCard, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavContainer from './NavContainer';

type NavigationProps = {};

const Navigation: React.FC = () => {

  const [isTransparent, setIsTransparent] = useState(true);

  useEffect (() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;
      setIsTransparent(scrollPosition < threshold);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <div className={`nav-container ${isTransparent ? 'transparent' : ''}`}>
        <NavContainer />
        

      </div>
    </>
  );
};

export default Navigation;
