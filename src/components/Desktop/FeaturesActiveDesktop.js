import React from 'react'
import iconTodo from '../../assets/images/icon-todo.svg'
import iconCalender from '../../assets/images/icon-calendar.svg'
import iconReminder from '../../assets/images/icon-reminders.svg'
import iconPlanning from '../../assets/images/icon-planning.svg'
import { motion } from 'framer-motion'

const FeaturesActiveDesktop = () => {
  return (
    <>
            <motion.div 
                className='FeaturesActive absolute top-12 flex justify-center shadow-xl p-6 w-48 rounded-xl z-20' 
                style={{'boxShadow' : '4px 10px 51px 1px rgba(0,0,0,0.12)', 'left': '-12rem', 'backgroundColor': 'white'}}
                key="FeaturesActive"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >
                <ul>
                    <li className='flex items-center cursor-pointer'>
                        <img className='w-4 h-5 ml-0.5' src={iconTodo} />
                        <p className='ml-4'>Todo List</p> 
                    </li>
                    <li className='flex mt-4 items-center cursor-pointer'>
                        <img  className='w-5 h-5' src={iconCalender} />
                        <p className='ml-3'>Calender</p>
                    </li>
                    <li className='flex mt-4 items-center cursor-pointer'>
                        <img  className='w-4 h-5' src={iconReminder} />
                        <p className='ml-4'>Reminders</p>
                    </li>
                    <li className='flex mt-4 items-center cursor-pointer'>
                        <img  className='w-5 h-5' src={iconPlanning} />
                        <p className='ml-3'>Planning</p>
                    </li>
                </ul>
            </motion.div>
    </>
  )
}

export default FeaturesActiveDesktop