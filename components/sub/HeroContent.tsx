"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'


export const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 w-full z-[20] max-sm:px-2'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-blue-300 opacity-[0.9]'
        >
        <a href='#about'><h1 className='Welcome-text text-[13px]'>Welcome Soul</h1></a>
        </motion.div>
       
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto max-sm:text-3xl"
        >
          <span>
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400 ">
              {" "}
              The best{" "}
            </span>
            Connection Exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-sm:text-sm"
        >
Connections are our priority. <br />From day one, we've been dedicated to fostering meaningful interactions and providing support. Our platform offers an open-minded space where everyone feels safe to be themselves and connect on a deeper level.</motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        href='https://t.me/Influencedbysouls'> 
          Learn More!
        </motion.a>
        </div>
    </motion.div>
  )
}
