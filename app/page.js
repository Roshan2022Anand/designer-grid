"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CardOne from '@/Components/Cards/CardOne';
import CardTwo from '@/Components/Cards/CardTwo';
import CardThree from '@/Components/Cards/CardThree';
const page = () => {
  // gsap.
  //all the states are defined here
  const [isDarkMode, setIsDarkMode] = useState(false);

  //all global variable are declared
  const TITLE = 'DESIGNER GRID'.split(' ');

  //function to pause the execution  of the program fro given time
  const waitExc = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  //function to toggle dark mode
  const toggleDarkMode = async () => {
    gsap.to(".dark-btn-container", {
      width: '100vw',
      height: '100vh',
      duration: 0.5,
    })
    await waitExc(600)
    setIsDarkMode(!isDarkMode);
    gsap.to(".dark-btn-container", {
      width: "fit-content",
      height: "fit-content",
      duration: 0.1,
    })
    if (isDarkMode) {
      document.documentElement.style.setProperty('--bg-color', '#1E1E1E');
      document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
      document.documentElement.style.setProperty('--text-color', '#F5F5F5');
      document.documentElement.style.setProperty('--hover-color', '#FFA500');
      document.documentElement.style.setProperty('--secondary-bg-color', '#4A4A4A');
      document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(30, 30, 30, 0.6)');
    }
    else {
      document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
      document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
      document.documentElement.style.setProperty('--text-color', '#333333');
      document.documentElement.style.setProperty('--hover-color', '#FFF3E0');
      document.documentElement.style.setProperty('--secondary-bg-color', '#7D7D7D');
      document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(255, 255, 255, 0.3)');
    }
  }




  const INVERT_STYLE = {
    backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
    color: isDarkMode ? '#F5F5F5' : '#333333',
  }
  return (
    <>
      <div className='dark-btn-container fixed top-0 right-0 p-2 text-right' style={INVERT_STYLE}>
        <button onClick={toggleDarkMode}>click</button>
      </div>
      {/* hero section */}
      <section className='h-full flex flex-col gap-3 justify-center items-center text-[10vw]'>
        <div>
          <span >DESIGNER</span>
          <span className='rounded-2xl px-1' style={INVERT_STYLE}>GRID</span>
        </div>
        <div className='quote text-[2vw]'>
          {["Simple Design", "To", "Super animation", "And ...", "A touch of 3D"].map((quote, index) => {
            <p key={index} className="quote-text">{quote}</p> 
          })}
        </div>
      </section>

      {/* all cards section */}
      <section className='h-full'>
        <div className='w-full h-2/3 flex justify-evenly'>
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
      </section>
    </>
  )
}

export default page