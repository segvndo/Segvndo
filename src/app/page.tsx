import React, { ReactElement } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className="flex flex-row justify-center space-x-4">
    
      <Navigation />

    </main>
  );
};

export default Home;
