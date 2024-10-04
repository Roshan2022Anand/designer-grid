"use client"
import { DesignConext } from '@/helper/MyContext';
import React, { useContext, useEffect } from 'react'

const page = () => {
  const { setactiveColorMode } = useContext(DesignConext);
  useEffect(() => {
    setactiveColorMode("skills")
  }, [])
  return (
      <main className='bg-[--skills-bg-color] text-[--skills-text-color] text-[4vw] w-full h-full flex flex-col justify-center items-center'>
          <div>Skills</div>
          <div className='text-[--skills-highlight-color]'>Hightlight</div>
      </main>
  )
}

export default page