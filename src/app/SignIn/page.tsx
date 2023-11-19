"use client"
import connecttoDB from '@/dbConnection/connect';
import React, { useEffect,useState } from 'react'

const SignIn = () => {
  const[username,setusername]=React.useState('');
  const[gmail,setgmail]=React.useState('');
  const[password,setpassword]=React.useState('');

  const handlesubmit=async()=>{
    try {
      if(username==='' || gmail==='' || password===''){
        alert('Please fill all the fields')
        return
      }
      else{
        await fetch('/api/v1', {
          method: 'POST',
          body: JSON.stringify({username:username,gmail:gmail,password:password}),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        alert('success')
      }
    } catch (error : any) {
      console.log(error.message)
      
    }

  }

  return (
    <div className='w-[30%] h-[500px] mt-[100px] rounded-lg m-auto bg-white flex flex-col justify-around'>
      <label htmlFor="" className='text-center text-black pt-[20px]'>Signup</label>
      <input type="text" className='w-[80%] m-auto h-[15%] outline-black text-black border-black border-[1px] rounded-md pl-[10px]'  placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}/>
      <input type="text" className='w-[80%] m-auto h-[15%] outline-black text-black border-black border-[1px] rounded-md pl-[10px]'  placeholder='Gmail' value={gmail} onChange={(e)=>setgmail(e.target.value)}/>
      <input type="text" className='w-[80%] m-auto h-[15%] outline-black text-black border-black border-[1px] rounded-md pl-[10px]' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

      <button className='w-[60%] h-[15%] bg-blue-500 text-white rounded-md m-auto font-bold text-[20px] hover:border-2 hover:border-black hover:bg-white hover:text-black' onClick={handlesubmit}>Submit</button>
      {/* <button className='p-[20px]' onClick={handleclickpost}>Post</button>
      <button onClick={handleclickget}>Get</button> */}




    </div>
  )
}

export default SignIn
