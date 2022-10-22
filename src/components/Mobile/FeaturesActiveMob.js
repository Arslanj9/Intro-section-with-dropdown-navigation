import React from 'react'
import iconTodo from '../../assets/images/icon-todo.svg'
import iconCalender from '../../assets/images/icon-calendar.svg'
import iconReminder from '../../assets/images/icon-reminders.svg'
import iconPlanning from '../../assets/images/icon-planning.svg'
import { motion } from 'framer-motion'

const featuresActiveMob = () => {
  return (
    <motion.div 
        className='fmob z-50 px-2'
        key="fmob"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5}}
    >
        <ul>
            <li className='f-list flex mt-4'>
                <img className='w-4 h-5 mx-3.5' src={iconTodo} />
                <p>Todo List</p>
            </li>
            <li className='f-list flex mt-4'>
                <img  className='w-5 h-5 mx-3' src={iconCalender} />
                Calender
            </li>
            <li className='f-list flex mt-4'>
                <img  className='w-4 h-5 mx-3' src={iconReminder} />
                Reminders
            </li>
            <li className='f-list flex mt-4'>
                <img  className='w-5 h-5 mx-2.5' src={iconPlanning} />
                Planning
            </li>
        </ul>
    </motion.div>
  )
}

export default featuresActiveMob