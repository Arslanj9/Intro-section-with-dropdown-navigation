import React from "react";
import MenuMob from './MenuMob'
import { motion, AnimatePresence } from 'framer-motion'

const Menu = () => {
  return (
    <>
        <motion.div 
          className="wrapper absolute bg-gray-900 opacity-50 top-0 left-0 w-full h-full md:hidden"
          
          initial={{ opacity: 0}}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0}}
          transition={{ duration: 0.4 }}
        >
            
        </motion.div>
        
        
        <motion.div 
          className="whitebg bg-neutral-50 w-8/12 absolute h-full right-0 top-0 md:hidden"
          key="whitebg"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 70 }}
          transition={{ duration: 0.8 }}
        >

          <MenuMob />
                    
        </motion.div>
        
    </>
  );
};

export default Menu;
