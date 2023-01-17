import React from 'react'
import computer from "../images/computer.jpg"


const About = () => {

  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            About
            
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

         
        </div>

        <div>
          <img
            src={computer}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/5  mr-4 "
          />
        </div>
      </div>
    </div>
  )
}

export default About;
