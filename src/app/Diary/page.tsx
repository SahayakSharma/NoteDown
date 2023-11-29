"use client"
import { isloggedin } from '@/helper/isloggedin'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [usernotes,setusernotes]=React.useState([{}])
  const [activehead,setactivehead]=React.useState('')
  const [activedesc,setactivedesc]=React.useState('')
  const router=useRouter();

  const addnewnote=()=>{
    setactivedesc('')
    setactivehead('')
  }

const handlesave=async()=>{
  try {
    await fetch('api/v2',{
      method:'POST',
      body:JSON.stringify({username:"Sahayak",notes:[{head:"Heading 1",desc:"Description 1"},{head:"Heading 2",desc:"Description 2"}]}),
    })
  } catch (error : any) {
    console.log(error.message)
    
  }

}






const loadnotes=async()=>{
  try {
    await fetch('api/v2',{
      method:'GET',
    })
    .then(async (response)=>{
      const allnotes=await response.json();
      // console.log(allnotes)
      await allnotes.map(async (user:any)=>{
        // console.log(user)
        if(user.name==='Sahayak'){
          // setusernotes(user.notes)
          // console.log(user.notes)
          // setusernotes([...usernotes,user.notes])
          // console.log(usernotes)
           user.notes.map((note:any)=>{
            // console.log(note)
            setusernotes((previous)=>[...previous,{head:note.head,desc:note.desc}])
          })
          console.log("ran once")


        }
        
        
      })
      
      })

      
      
    
  } catch (error:any) {
    console.log(error.message)
    
  }
}







  useEffect(()=>{
    // if(!isloggedin){
    //   router.push('/SignIn')
    // }
    loadnotes();   
  
  },[])
  return (
    <div className='w-[80%] h-[600px] m-auto border-2 mt-[50px] border-[rgb(110,193,96)] flex rounded-md'>

      <div className='w-[30%] h-[100%] text-white  flex flex-col ' style={{borderRight:"1px solid white"}}>
        <p className='text-[30px] font-bold pl-[120px] w-[100%] h-[10%]  flex items-center'>NOTEs</p>
        
        <div className='text-[20px]  m-auto w-[100%] h-[80%] overflow-y-scroll '>
        {usernotes.map((item,key)=>{
          return(
            <h1 className='pl-[30px] pt-[20px] cursor-pointer' onClick={()=>{
              setactivehead(item.head)
              setactivedesc(item.desc)
            }} key={key}>{item.head}</h1>
          )
        })}
        </div>
        <div className='w-[80%] h-[8%] m-auto  rounded-2xl border-2 border-white pl-[80px] text-[20px] font-bold flex items-center '><p className='opacity-50 hover:opacity-100 cursor-pointer' onClick={addnewnote}>+ Add New</p></div>
        <div className='h-[2%] w-[100%]'></div>
      </div>

      <div className='w-[70%] h-[100%]  flex flex-col justify-around'>
        <input type="text" className='w-[80%] m-auto h-[10%] outline-none border-none bg-black text-center' placeholder='Heading' value={activehead} onChange={(e)=>setactivehead(e.target.value)} />
        <textarea className='w-[80%] m-auto h-[50%] outline-none border-none bg-black' name="" id=""  placeholder='Enter information here' value={activedesc} onChange={(e)=>setactivedesc(e.target.value)}></textarea>
        <div className='w-[80%] h-[10%] m-auto'><button className='w-[20%] py-[10px] bg-[rgb(110,193,96)] rounded-md border-2 border-white font-bold text-[20px] hover:bg-white hover:text-black' onClick={handlesave}>Save</button></div>
        
      </div>
      
    </div>
  )
}

export default page
