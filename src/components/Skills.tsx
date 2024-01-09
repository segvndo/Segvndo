import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faNpm, faGit,  } from '@fortawesome/free-brands-svg-icons';

const Skills: React.FC = () => {

  const iconColour = "#362c4e";

  return (
    <>
      <div className="text-center mt-12">
      <div className="text-3xl font-semibold font-serif mb-8 text-bp-primary-color">Skills</div>
      <div className="flex flex-wrap justify-center space-x-10 text-purple-950">
        <FontAwesomeIcon icon={faHtml5} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faCss3Alt} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faJs} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faReact} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faNode} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faNpm} size="6x" style={{ color: iconColour }} />
        <FontAwesomeIcon icon={faGit} size="6x" style={{ color: iconColour }} />
        {/* Add additional icons if needed */}
      </div>
    </div>
    </>
  )
}

export default Skills;