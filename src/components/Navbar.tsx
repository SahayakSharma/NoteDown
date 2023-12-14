"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router=useRouter();
  return (
    <div className='w-[100vw] h-[80px] text-black items-center bg-[#FFA500] flex justify-around rounded-[20px]'>
        <button className='w-[50px] h-[30px]  text-black hover:text-white bg-transparent hover:bg-[#FFA600]  '>HOME</button>
        <button className='w-[50px] h-[30px]  text-black hover:text-white bg-transparent hover:bg-[#FFA600]  ' onClick={()=>{router.push('/SignIn')} }>SignIn</button>
        <button className='w-[50px] h-[30px]  text-black hover:text-white bg-transparent hover:bg-[#FFA600]  'onClick={()=>{router.push('/')}}>LogIn</button>
        <button className='w-[50px] h-[30px]  text-black hover:text-white bg-transparent hover:bg-[#FFA600]  '>Diary</button>

      
    </div>
  )
}

export default Navbar
