import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center md:justify-center">
      <h1 className="text-3xl font-serif  font-semibold mt-12 text-bp-primary-color">About</h1>
      <div className="text-xl font-serif ml-44 mr-44 mb-4 mt-4 text-bp-primary-color pb-2 md:pb-6">

        <p>Greetings! I am an enthusiastic Full Stack Developer committed to designing websites and applications that play a pivotal role in enhancing the overall success of the product. My path in web development is characterized by an ongoing commitment to learning, and I find fulfillment in imparting my insights and knowledge to the broader development community.
        </p>
        &nbsp;
        <p>
        Through my various projects, I illustrate my unwavering commitment to crafting engaging and impactful web solutions. These endeavors not only serve as a testament to my technical prowess but also reflect my genuine passion for generating innovative and thrilling creations. I am a firm believer in the power of collaboration and teamwork, and I am eager to join a team of like-minded individuals who share my passion for web development. When you're ready, let's connect and explore the possibilities for a collaborative journey towards success!
        </p>
      </div>
    </div>
  );
};

export default About;