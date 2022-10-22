import React from 'react'
import { useState } from "react";
import FeaturesActiveDesktop from "../Desktop/FeaturesActiveDesktop";
import CompanyActiveDesktop from "../Desktop/CompanyActiveDesktop";
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import arrowUp from '../../assets/images/icon-arrow-up.svg'
import { AnimatePresence } from 'framer-motion'

const MenuDesktop = () => {

    const [featuresDropdown, setFeaturesDropdown] = useState(false);
    const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <>
        <div className='flex justify-between w-full'>
            <ul className="text-lg flex ml-8">
                <div className="flex ml-6">
                    <li 
                        onClick={() => setFeaturesDropdown(!featuresDropdown)} 
                        className="cursor-pointer" 
                    >
                        <p className='hover:font-bold'>Features</p>
                    </li>
                    <img 
                        className="w-2 mt-3 ml-2 cursor-pointer" 
                        onClick={() => setFeaturesDropdown(!featuresDropdown)} 
                        style={{'height' : '0.35rem'}} 
                        src={featuresDropdown ? arrowUp : arrowDown} 
                    />
                </div>

                <div className='relative'>
                    <AnimatePresence>
                        {featuresDropdown && <FeaturesActiveDesktop />}
                    </AnimatePresence>
                </div>
                

                <div className="company flex ml-6">
                    <li 
                        onClick={() => setCompanyDropdown(!companyDropdown)} 
                        className="cursor-pointer"
                    >
                        <p className='hover:font-bold'>Company</p>
                    </li>
                    <img 
                        className="w-2 mt-3 ml-2 cursor-pointer" 
                        onClick={() => setCompanyDropdown(!companyDropdown)}
                        style={{'height' : '0.35rem'}}  
                        src={companyDropdown ? arrowUp : arrowDown}
                    />
                </div>

                <div className="relative">
                    <AnimatePresence>
                        {companyDropdown && <CompanyActiveDesktop />}
                    </AnimatePresence>
                </div>


                <li className='cursor-pointer ml-6'>
                    <p className='hover:font-bold'>Careers</p>
                </li>
                <li className='cursor-pointer ml-6'>
                    <p className='hover:font-bold'>About</p>
                </li>
            
            </ul>

            <div className="flex">
                <button className='mr-10 hover:font-bold'>Login</button>
                <button className="border-2 rounded-xl border-gray-900 py-1 px-7 hover:font-bold">
                    Register
                </button>
            </div>
        
      </div>
    </>
  )
}

export default MenuDesktop