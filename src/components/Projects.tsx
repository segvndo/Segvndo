import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl font-serif font-semibold mb-8 text-bp-primary-color">Projects</div>

      <div className="flex flex-row space-x-6 p-8 text-bp-primary-color flex-wrap justify-center md:justify-center">
        <div className="text-2xl font-serif">BookBud</div>
        <div className="text-2xl font-serif">Bartender Bench</div>
        <div className="text-2xl font-serif">New Me</div>
      </div>
    </div>
  );
};

export default Projects;
