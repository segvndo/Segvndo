import React, { ReactElement } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className=" flex flex-col justify-center space-x-4">
    
      <Navigation />
      {/* <SoscMedia /> */}
      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>
      
      <div>
        <Skills />
      </div>

    </main>
  );
};

export default Home;
