import React, { ReactElement } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';

type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className=" flex flex-col justify-center space-x-4">
    
      <Navigation />
      {/* <SoscMedia /> */}
      <div>
        <About />
      </div>
    </main>
  );
};

export default Home;
