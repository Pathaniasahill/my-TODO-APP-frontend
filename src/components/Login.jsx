import { Alert, Box, Button, Grid,  TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const[error,seterror]=useState("");
  const handlesubmit=async(e)=>{
    e.preventDefault();

   const formdata= new FormData(e.target);
  const email= formdata.get("email");
  const password= formdata.get("password");

  try {
    const res= await fetch("https://mytodo-app-1-q64i.onrender.com/api/login",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({email,password})
     });
     const data=  await res.json();
     if(res.ok){
      alert("login successfull");
      
      navigate("/workpage/");
      const ab = data.email
      localStorage.setItem("useremail",ab);
      

      
      
     }
     else{
      alert(data.message)

     }      
  } catch (error) {
    seterror("something went wrong")
  }
       
  }
  const navigate = useNavigate();
  
  
  
  
  return (
    <div className="w-[40rem] h-[50vh] flex justify-center items-center border mt-10 mx-auto p-5 bg-stone-300 rounded-lg">
         <Box>
          
      <form className="w-full" onSubmit={handlesubmit}>
        
          <Grid container spacing={2}>
            <div className='flex justify-center items-center mb-5 space-x-4'>
            <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
           
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>
          </div>
          

          
            <div className=''>
              <Button
              
              className="bg-[#9155FD] w-full flex justify-center items-center"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0", justifyContent:"center"}}
            >
              Login
            </Button>
            </div>
            
          
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
         <div className="py-3 flex items-center">
        <p className="m-0 p-0">don't have account ?</p>
        <Button onClick={()=>navigate("/register")} className="ml-5" size="small">
          Register
        </Button>
        <Button/>
        </div>
      </div>
      
   </Box>

    </div>
  )
}

export default Login
const handleoperation=()=>{
   console.log("operationTriggered x-axis-14 y-axis-19 classname-'vertical-axis-sharpened vue-90 on hover-bg-93 on click-Triggere HandleClick here 'total Hovering Hours--600psi Total defamable hours 91''")
}