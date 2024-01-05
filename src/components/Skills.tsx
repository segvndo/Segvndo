import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faNpm, faGit, faPostgres, faCypress, faTailwind, faJest, faDatabase } from '@fortawesome/free-brands-svg-icons';

const Skills: React.FC = () => {

  return (
    <>
      <div className="flex flex-center justify-center text-4xl font-serif mt-12">Skills</div>
      <div className="flex flex-center justify-center space-x-10">
        <FontAwesomeIcon icon={faHtml5} size="6x"/>
        <FontAwesomeIcon icon={faCss3Alt} size="6x"/>
        <FontAwesomeIcon icon={faJs} size="6x"/>
        <FontAwesomeIcon icon={faReact} size="6x"/>
        <FontAwesomeIcon icon={faNode} size="6x"/>
        <FontAwesomeIcon icon={faNpm} size="6x"/>
        <FontAwesomeIcon icon={faGit} size="6x"/>
        <FontAwesomeIcon icon={faPostgres} size="6x"/>
        <FontAwesomeIcon icon={faCypress} size="6x"/>
        <FontAwesomeIcon icon={faTailwind} size="6x"/>
        <FontAwesomeIcon icon={faJest} size="6x"/>
        <FontAwesomeIcon icon={faDatabase} size="6x"/>
      </div> 
    </>
  )
}

export default Skills;