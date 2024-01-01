'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

type SoscMediaProps = {};

const SoscMedia: React.FC<SoscMediaProps> = () => {
  return (
    <div className="icon-container">

      <div>
        <div className="flex flex-center justify-center m-2 ">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon mr-4 hover:animate-spin" style={{ color: 'black' }} />
          <FontAwesomeIcon icon={faDiscord} size="2x" className="icon mr-4 hover:animate-spin" style={{ color: 'black' }} />
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon mr-4 hover:animate-spin" style={{ color: 'black' }} />
          <FontAwesomeIcon icon={faYoutube} size="2x" className="icon mr-4 hover:animate-spin" style={{ color: 'black' }} />
        </div>
        
      </div>

    </div>
  );
};

export default SoscMedia;
