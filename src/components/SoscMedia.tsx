import React from 'react';

const SoscMedia: React.FC = () => {
  return (
    <div className="flex flex-row justify-center space-x-4">

      <div className="bg-yellow-300 w-1/2 h-1/2">
        <h1>LinkedIn</h1>
      </div>

      <div className="bg-yellow-300 w-1/2 h-1/2">
        <h1>Github</h1>
      </div>

      <div className="bg-yellow-300 w-1/2 h-1/2">
        <h1>Discord</h1>
      </div>

    </div>
  );
};

export default SoscMedia;