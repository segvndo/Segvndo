import React from 'react'
import Image from 'next/image';
import bee from '../../assets/bee.jpg';
import NavIcons from './NavIcons';

const NavContainer: React.FC = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="flex flex-col lg:flex-row items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-16 bg-grey-500 text-2xl pr-6 font-serif text-bp-primary-color bg-yellow-300 p-8 w-full h-24">

          <div className="fixed left-0 top-0 p-4 ml-4">
            <div className="relative">
              <Image src={bee} alt="Bee Logo" height={60} width={70} className="rounded-full mb-8" />
            </div>
          </div>
          <NavIcons />
        </nav>
      </div>
    </>
  )
}

export default NavContainer;