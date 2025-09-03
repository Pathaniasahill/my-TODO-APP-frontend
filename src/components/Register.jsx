import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[error,seterror]=useState("")
  const navigate= useNavigate();
  const  handlesubmit=async(e)=>{
    e.preventDefault();
    const formdata= new FormData(e.target);
    const firstname= formdata.get("firstname")
    const lastname= formdata.get("lastname")
     const mobilenumber= formdata.get("mobilenumber")
      const email= formdata.get("email")
       const password= formdata.get("password")
       const location= formdata.get("location")
    
       try {
        const res= await fetch("https://mytodo-app-1-q64i.onrender.com/api/register",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({firstname,lastname,mobilenumber,email,password,location})

        })
        const data=await res.json()
        if(res.ok){
          alert("user registered successfully and redirecting to the login page")
          navigate("/login")
        }else{
          alert(`${data.message}`)
        }
        
      } catch (error) {
        seterror("something went wrong")
      }
    }
  return (
    <div>
      <div className='flex justify-center items-center h-[60vh]  bg-slate-100 mb-2 '>
        <form onSubmit={handlesubmit}>
          <div className='space-y-3 border p-3 rounded-lg bg-white shadow-lg'>
 <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
              <TextField
              id="firstname"
              label="firstname"
              name="firstname"
              fullWidth
              required
              />
              
              
            </Grid >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
               <TextField
              id="lastname"
              label="lastname"
              name="lastname"
              fullWidth
             
              />
            </Grid >

          </Grid>


          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
              <TextField
              id="mobilenumber"
              label="mobilenumber"
              name="mobilenumber"
              fullWidth
              required
              />
              
              
            </Grid >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
               <TextField
              id="email"
              label="email"
              name="email"
              fullWidth
              required
              />
            </Grid >

          </Grid>



          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
              <TextField
              id="password"
              label="password"
              name="password"
              fullWidth
              required
              />
              
              
            </Grid >
            <Grid item xs={12} sm={6} md={4} className="bg-white p-5 rounded-lg shadow-lg">
               <TextField
              id="Location"
              label="Location"
              name="Location"
              fullWidth
             
              />
            </Grid >

          </Grid>
          <div className='flex flex-col justify-center items-center space-x-4'>
            <Grid container spacing={1} >
            <Button variant='outlined' type='submit'>Registerr</Button>
            </Grid>
<div className='underline text-gray-600 opacity-120 hover:border-l-gray-950 cursor-pointer' >
  <Grid container spacing={1} >
           <a onClick={()=>navigate("/login")}>already a user?</a>
            </Grid>
</div>
             
          </div>
          
          </div>
          
        </form>
         
      </div>
    </div>
  )
}

export default Register
