'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {
  return (

    <div className="fixed left-0 top-0 p-4 ml-4">
      <div>
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        <FontAwesomeIcon icon={faDiscord} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        <FontAwesomeIcon icon={faGithub} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        <FontAwesomeIcon icon={faYoutube} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
      </div>

    </div>

  );
};

export default SoscMedia;
