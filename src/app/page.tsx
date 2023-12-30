import React, { ReactElement } from 'react';
import Link from 'next/link';

type HomeProps = {};

const Home: React.FC<HomeProps> = (): ReactElement => {
  return (
    <main className="flex flex-row justify-center space-x-4">
      
      <div>
        <Link href="/">
          Home
        </Link>
      </div>

    </main>
  );
};

export default Home;
