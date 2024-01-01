import React, { ReactElement } from 'react';
import Navigation from '@/components/Navigation';
import SoscMedia from '@/components/SoscMedia';

type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className="bg-yellow-300 flex flex-col justify-center space-x-4">
    
      <Navigation />
      {/* <SoscMedia /> */}

    </main>
  );
};

export default Home;
