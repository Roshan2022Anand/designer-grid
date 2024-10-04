"use client"
import React, { useContext, useEffect } from 'react'
import styles from "@/app/DesignPg/DesignPg.module.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitTextJS from 'split-text-js';
import { DesignConext } from '@/helper/MyContext';
const page = () => {

  const { activeColorMode, setactiveColorMode } = useContext(DesignConext);
  useGSAP(() => {
    //gsap animation to animate the quote
    const titles = document.querySelectorAll(".quote-text");
    const tl = gsap.timeline({ repeat: -1 });
    titles.forEach((title) => {
      // const splitTitle = new SplitText(title, { type: "chars" });
      const splitTitle = new SplitTextJS(title, { type: "chars" });
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 10,
        rotateX: 90,
        duration: 1,
        stagger: 0.02,
      }, "<");

      tl.to(splitTitle.chars, {
        opacity: 0,
        y: -10,
        rotateX: -90,
        duration: 1,
        stagger: 0.02,
      }, "<1");
    });
  }, []);

  useEffect(() => {
   setactiveColorMode("design")
  }, [])
  
  return (
    <>
      <main className={styles['hero-section']}>
        <div>
          <span >DESIGNER </span> <span className='rounded-2xl px-1 bg-[--design-text-color] text-[--design-bg-color]'>GRID</span>
        </div>
        <div className='quote text-[3vw]'>
          {["From Simple Design", "To Super animation", "And ...", "A touch of 3D"].map((quote, index) => {
            return <p className="quote-text" key={index}>{quote}</p>
          })}
        </div>
      </main>
    </>
  )
}

export default page