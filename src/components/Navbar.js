import React from 'react'
import snap from '../assets/images/logo.svg' 
import menuBtn from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-close-menu.svg'
import { useState } from 'react'
import Menu from './Mobile/Menu'
import MenuDesktop from './Desktop/MenuDesktop'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

  return (
    <motion.div 
      className='my-7 flex justify-between w-full md:max-w-7xl px-5'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        <img className="cursor-pointer z-20 h-7 mt-0.5" src={snap} alt="SNAP logo" />
        <img 
          onClick={() => setOpenMenu(!openMenu)} 
          className="cursor-pointer mt-1 z-40 md:hidden" 
          style={openMenu ? {width:'1.6rem', height:'1.5rem'} : {width:'2rem', height:'1.2rem'}} 
          src={openMenu ? closeMenu : menuBtn} alt="menu" 
        />

        <AnimatePresence>
          {openMenu && <Menu />}
        </AnimatePresence>

        <div className='w-full hidden md:flex'>
          <MenuDesktop />
        </div>
    </motion.div>
  )
}

export default Navbar