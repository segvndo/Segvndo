import React from 'react'

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:justify-center">
      <h1 className="text-3xl font-serif font-semibold mt-12 text-bp-primary-color">Hi, it's Bea</h1>
      <div className="text-xl font-serif mx-auto ml-44 mr-44 mb-4 mt-4 text-bp-primary-color pb-2 md:pb-6 text-center">
        <p>
          I'm an aspiring full-stack developer based in Toronto, Canada, on a mission to enhancing user experiences by seamlessly integrating intuitive design with powerful back-end functionality.
        </p>
      </div>
    </div>
  )
}

export default Intro;