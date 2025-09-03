import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-gray-500 text-white text-center p-4  bottom-0 w-full  flex flex-col justify-center'>
            <div className='opacity-120'>
                &copy; 2024 My Todo App. All rights reserved.
            </div>
            <div className='space-x-2 flex justify-center'>
                <div className='opacity-120'>
                   Developed by 
                </div>
                <div >
                    <a href='https://www.linkedin.com/in/sahil-pathania-2b0545229/' className=' underline hover:text-blue-300'>
                   Sahil Pathania
                </a>
                </div>
                
                
           </div>
            
        </div>
      
    </div>
  )
}

export default Footer
