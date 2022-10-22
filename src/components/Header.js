import React from 'react'
import heroMob from '../assets/images/image-hero-mobile.png'
import heroDesktop from '../assets/images/image-hero-desktop.png'
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div 
        className='flex md:flex-row-reverse flex-col md:w-4/5'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
    >
        <div className="image md:mt-12 w-full">
            <img className='w-full md:hidden m-0 p-0' src={heroMob} />
            <img className='w-96 hidden md:block ml-28' src={heroDesktop} />
        </div>
        <div className='w-full mt-12'>
            <h1 className='text-4xl md:text-left font-bold z-10 md:hidden'>Make remote work</h1>
            <h1 className='text-4xl text-left font-bold z-10 w-8/12 mt-20 text-6xl ml-28 hidden md:block'>Make <br /> remote work</h1>
            <div className='w-full flex justify-center md:block'>
              <p className='w-80 mt-5 text-center md:w-8/12 md:text-start md:ml-28 md:mt-10 md:text-base'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            </div>
            
            <button className="border-2 mt-4 rounded-xl bg-black text-white border-gray-900 py-2 px-6 hover:text-black hover:bg-white md:ml-28 md:flex md:mt-12">
                Learn More
            </button>

            <div className='flex justify-between items-center mt-12 w-10/12 ml-8 md:mt-20 md:w-7/12 md:ml-28'>
              <img className='w-18 h-4' src={databiz} />
              <img className='w-14 h-7' src={audiophile} />
              <img className='w-14 h-3.5' src={meet} />
              <img className='w-16 h-5' src={maker} />
            </div>

        </div>
    </motion.div>
  )
}

export default Header