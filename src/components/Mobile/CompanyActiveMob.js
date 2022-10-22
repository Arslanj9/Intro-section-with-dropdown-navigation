import React from 'react'
import { motion } from 'framer-motion'

const CompanyActiveMob = () => {
  return (
    <motion.div 
        className='Cmob z-50 px-2 ml-3'
        key="Cmob"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5}}
    >
        <ul>
            <li className='f-list flex mt-4'>
                History
            </li>
            <li className='f-list flex mt-4'>
                Our Team
            </li>
            <li className='f-list flex mt-4'>
                Blog
            </li>
            
        </ul>
    </motion.div>
  )
}

export default CompanyActiveMob