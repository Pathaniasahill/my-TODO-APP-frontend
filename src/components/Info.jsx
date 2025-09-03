import React from 'react'
import todoicon from './photos/todoicon.jpg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Info = () => {
  
  return (
    <div className='  py-2 flex flex-col  items-center  '>
      <div className='text-3xl font-bold text-center opacity-50'>
        login/Signup to get started...
      </div>
       <div className=' flex justify-center mt-10 px-4 space-x-4  '>
          <div className='flex justify-center items-center'>
            <img src={todoicon} alt="imagetodo" width={200} />
          </div>
         <div className="bg-yellow-200 w-full max-w-2xl p-6 rounded-lg shadow-md">
          <p>
             ✅ Stay organized, stay ahead – manage your tasks effortlessly.
             
             
             
             
             
          </p>
          <p>
              📝 A simple, clean, and powerful way to track what matters.
          </p>
          <p>
              ⚡ Boost your productivity with smart task management.
          </p>
          <p>
             📅 Plan your day, week, or month in just a few clicks.
          </p>
          <p>
             🔔 Never miss a deadline with reminders and notifications.
          </p>
          <p>
                🌟 Your personal space to turn plans into achievements.
          </p>
        
         
    </div>
    </div>
   
    </div>
   
  )
}

export default Info
