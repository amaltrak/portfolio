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
            Autodidacte depuis mon plus jeune âge, j'aime apprendre de nouvelles choses pour améliorer mes compétences. De nature très curieuse, j'adore le monde du web et des nouvelles technologies, ce que j'aime le plus c'est l'art et la précision derrière chaque conception. Avec toutes mes capacités et mes connaissances, j'aurai le plaisir de me consacrer pleinement au développement de vos idées afin d'en faire de grands projets. 
            
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
