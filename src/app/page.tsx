"use client";
import React from 'react';
import { useState } from 'react';
export default function Home() {
  const[loading,setloading]=React.useState(false);
  const[username,setusername]=React.useState('');
  const[password,setpassword]=React.useState('');
  const handlesubmit=async()=>{
    await fetch('/api/v1', {
      method: 'GET',
    })

  }
  return (
    <div className='w-[20%] h-[400px] bg-white rounded-lg m-auto mt-[160px] flex flex-col justify-around'>
      <label htmlFor="" className='text-center text-black pt-[20px]'>{loading?"Processing":"LogIn"}</label>
      <input type="text" className='w-[80%] m-auto h-[15%] outline-black text-black border-black border-[1px] rounded-md pl-[10px]'  placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}/>
      <input type="text" className='w-[80%] m-auto h-[15%] outline-black text-black border-black border-[1px] rounded-md pl-[10px]' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button className='w-[60%] h-[15%] bg-blue-500 text-white rounded-md m-auto font-bold text-[20px] hover:border-2 hover:border-black hover:bg-white hover:text-black' onClick={handlesubmit}>Submit</button>


    </div>
  )
}
