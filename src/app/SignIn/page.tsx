"use client"
import connecttoDB from '@/dbConnection/connect';
import React, { useEffect } from 'react'

const SignIn = () => {
  const name='sahayak';
  const phone='12345';
  const handleclickpost=async()=>{
    await fetch('/api/v1',{
      method:'POST',
      body:JSON.stringify({name,phone}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    .then((res)=>console.log('reached end'))

    
    
  }
  const handleclickget=async()=>{


    await fetch('/api/v2',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
    })
   .then((res)=>console.log(res.json()))
    
  }

  return (
    <div>
      {/* <button className='p-[20px]' onClick={handleclickpost}>Post</button>
      <button onClick={handleclickget}>Get</button> */}


      
    </div>
  )
}

export default SignIn
