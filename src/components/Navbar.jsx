import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isloggedin, setisloggedin]= useState(false);
    const navigate= useNavigate();
  return (
    <div>
        <div className='bg-blue-100   text-2xl mt-[2rem] mb-[2rem] p-4'>
        <Grid container spacing={2} >
        <Grid item size={10} className="pl-[2rem]" >
            Welcome to my To do list App

        </Grid>
        <Grid item size={2} >
            
            
            {
               (isloggedin)  ?(<Grid item size={2} >
                  <Avatar>s</Avatar>
               </Grid>):(<Grid item size={2} >
                    <Button onClick={()=>navigate("/login")} variant='contained' sx={{color:"white", borderRadius:'10rem'}}>Login</Button>
               </Grid> )
         }
                
               
               
           
        </Grid>

       </Grid>
        </div>
       
      
    </div>
  )
}

export default Navbar
