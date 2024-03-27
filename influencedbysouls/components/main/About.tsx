import React from 'react'

export const About = () => {
  return (
    <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">
        About
      </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0" id='about'>
          <video autoPlay loop muted className="h-auto w-full rounded-lg">
      <source src="/HeretoConnect.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700">Influenced By Souls, Connect and Explore</p>
          <p className="text-gray-700 mt-4">Founded in January 2024, a dynamic and innovative platform that encourages meaningful on others people life, dedicated from day one, to connect, support and inspire each other while exploring the world. <br />Join us and together, let's unleash the power of our souls to influence positive change in the world. <br /><br />I'm with you.<br /> Founder & CEO, Tcherno</p>
        </div>
      </div>
    </div>
  </div>
  )
}
