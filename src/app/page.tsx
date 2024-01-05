import React, { ReactElement } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import SoscMedia from '@/components/SoscMedia';
import Intro from '@/components/Intro';
import Contacts from '@/components/Contacts';


type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className=" flex flex-col justify-center space-x-4">

      <Navigation />

      <div >
        <Intro />
      </div>

      <div>
        <About />
      </div>

      <div >
        <Projects />
      </div>

      <div >
        <Skills />
      </div>

      <div>
        <Contacts />
      </div>

      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 p-4">
        <SoscMedia />
      </div>

    </main>
  );
};

export default Home;
