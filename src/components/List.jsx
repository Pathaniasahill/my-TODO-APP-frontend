import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Task from '../Task';


const List = ({id,title,onDelete}) => {
    
  return (
    <div>
        <div className='flex justify-center mb-3'>
            <div className='flex justify-left items-center align-middle text-2xl bg-amber-100 w-[50rem] min-h-20 rounded-lg px-3'>
               <div className='flex justify-left items-center align-middle text-2xl bg-amber-100 w-[50rem] min-h-20 rounded-lg px-3'>
       {title}
       </div> 
      <div className='flex justify-end items-center cursor-pointer' >
         <DeleteIcon onClick={()=>onDelete(id)} />
      </div>
            </div>
            
      
        </div>  
      
    </div>
  )
}

export default List
