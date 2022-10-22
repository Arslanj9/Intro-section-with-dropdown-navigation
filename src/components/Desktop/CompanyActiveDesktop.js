import React from 'react'
import { motion } from 'framer-motion'

const CompanyActiveDesktop = () => {
  return (
    <>
        <motion.div 
            className='companyActive z-50 p-4 pl-6 w-32 ml-3 top-12 rounded-xl absolute shadow-xl z-20' 
            style={{'boxShadow' : '4px 10px 51px 1px rgba(0,0,0,0.12)', 'left': '-7rem', 'backgroundColor': 'white'}}
            key="companyActive"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
        >
            <ul>
                <li className='f-list flex p cursor-pointer'>
                    History
                </li>
                <li className='f-list flex mt-3 cursor-pointer'>
                    Our Team
                </li>
                <li className='f-list flex mt-3 cursor-pointer'>
                    Blog
                </li>
                
            </ul>
        </motion.div>
    </>
  )
}

export default CompanyActiveDesktop