import React from "react";
import { useState } from "react";
import FeaturesActiveMob from "./FeaturesActiveMob";
import CompanyActiveMob from "./CompanyActiveMob";
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import arrowUp from '../../assets/images/icon-arrow-up.svg'
import { motion, AnimatePresence } from 'framer-motion'

const MenuMob = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <>
      <AnimatePresence>
        <motion.div 
          className="MenuMb absolute left-10 top-20"
          key="MenuMb"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="text-lg">
            <div className="features flex">
              <li
                onClick={() => setFeaturesDropdown(!featuresDropdown)}
                className="cursor-pointer"
              >
                Features
              </li>
              <img
                className="w-2 h-1.5 mt-3 ml-2"
                src={featuresDropdown ? arrowUp : arrowDown}
              />
            </div>

            <AnimatePresence>
              {featuresDropdown && <FeaturesActiveMob />}
            </AnimatePresence>

            <div className="company flex mt-5">
              <li
                onClick={() => setCompanyDropdown(!companyDropdown)}
                className="cursor-pointer"
              >
                Company
              </li>
              <img
                className="w-2 h-1.5 mt-3 ml-2"
                src={companyDropdown ? arrowUp : arrowDown}
              />
            </div>

            <AnimatePresence>
              {companyDropdown && <CompanyActiveMob />}
            </AnimatePresence>

            <li className="mt-5 w-0">Careers</li>
            <li className="mt-5 w-0">About</li>

            <div className="flex justify-center flex-col w-48">
              <button className="py-4 mt-4">Login</button>
              <button className="border-2 rounded-xl border-gray-900 py-2">
                Register
              </button>
            </div>
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MenuMob;
