'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {
  return (

    <div>
      <div className="flex flex-col">
        <a href="https://www.linkedin.com/in/bea-mungcal-b853b8285/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        </a>

        <a href="https://discord.gg/EMafpbbj" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        </a>

        <a href="https://github.com/segvndo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        </a>

        <a href="https://www.youtube.com/channel/UCUmreyX2cFFlVn7PxLSOj6w" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="icon mr-4 hover:animate-spin text-bp-primary-color" />
        </a>
      </div>

    </div>

  );
};

export default SoscMedia;
