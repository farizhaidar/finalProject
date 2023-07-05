import React from 'react';
import p1 from '../picture/PNJ.jpg'

const About = () => {
  return (
    <div className="container mx-auto p-4 background1 h-screen">
      <h1 className="text-4xl font-bold mb-4 pl-4">About TIK</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pl-8 pr-8">
          <img
            src={p1}
            alt="About"
            className="w-100 h-auto mb-4 rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis odio nec turpis semper fermentum. Morbi vitae nunc
            tristique, cursus odio vitae, gravida orci. Sed sed ultrices
            augue, id fermentum nisi. Nam tristique mi vel neque commodo, id
            finibus magna accumsan. Cras bibendum mi risus, et mattis nulla
            malesuada et. Fusce at arcu id lacus fringilla feugiat vitae at
            enim.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis odio nec turpis semper fermentum. Morbi vitae nunc
            tristique, cursus odio vitae, gravida orci. Sed sed ultrices
            augue, id fermentum nisi. Nam tristique mi vel neque commodo, id
            finibus magna accumsan. Cras bibendum mi risus, et mattis nulla
            malesuada et. Fusce at arcu id lacus fringilla feugiat vitae at
            enim.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default About;