import React from 'react'
import { HeroContent } from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full '>
      <video autoPlay loop muted className="w-full h-full object-cover">
      <source src="/Symbol.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <HeroContent/>
    </div>
  )
}

export default Hero