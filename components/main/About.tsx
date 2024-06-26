import React from 'react'

export const About = () => {
  return (
    <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 ml-48 max-sm:ml-0">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
        About US
      </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0" id='about'>
          <video autoPlay loop muted className="h-auto w-full rounded-lg">
      <source src="/HeretoConnectBigSize.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700">Influenced By Souls, Connect and Inspire</p>
          <p className="text-gray-700 mt-4">Founded in January 2024, Influenced by Souls is a dynamic and innovative platform that deeply impacts the lives of others.<br />From day one, we ve been dedicated to fostering connections, providing support, and inspiring each other.<br /><br />In todays world, many people suffer from loneliness and a lack of genuine connections despite the technology that was supposed to connect us all. This is often due to a lack of authenticity and insecurities. Thats why we ve created this platform where everyone feels safe to be themselves and connect with others on a deeper level. Our platform is designed to rescue souls from isolation, guide them towards genuine connections and inspire others in the real world.<br />Join Influenced by Souls and embark on a journey of connection, support, and inspiration. Together, lets build a world where no one feels alone. <br /><br />Tcherno, <br />
Founder & CEO, Influenced By Souls.
</p>
        </div>
      </div>
    </div>
  </div>
  )
}
