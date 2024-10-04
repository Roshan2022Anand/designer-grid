"use client"
import React, { useContext, useEffect } from 'react'
import { DesignConext } from '@/helper/MyContext';
const page = () => {
  const {setactiveColorMode}=useContext(DesignConext);
  useEffect(() => {
    setactiveColorMode("intro")
  }, [])
  return (
    <>
      {/* hero section */}
      <main className='bg-[--intro-bg-color] text-[--intro-text-color] w-full h-full flex  justify-center items-center'>
        <div className='text-[7vw] flex flex-col px-5'> 
          <span>I am a</span> <span className='rounded-2xl px-1 bg-[--intro-text-color] text-[--intro-bg-color] w-fit'>WEB Developer</span>
        </div>
        <div className=''>
          <img className='border-2'/>
        </div>
      </main>
    </>
  )
}

export default page