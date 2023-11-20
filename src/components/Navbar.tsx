"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router=useRouter();
  return (
    <div className='w-[100vw] h-[80px] text-black items-center bg-white flex justify-around'>
        <h2>HOME</h2>
        <h2 onClick={()=>{router.push('/SignIn')}}>SignIn</h2>
        <h2 onClick={()=>{router.push('/')}}>LogIn</h2>
        <h2>Diary</h2>

      
    </div>
  )
}

export default Navbar
