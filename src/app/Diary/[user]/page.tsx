'use client'
import React from 'react'
 
import { useParams } from 'next/navigation'
const user = () => {
    const us=useParams();

    
  return (
    <div>
        user name is {us.user}
   
      
    </div>
  )
}

export default user
