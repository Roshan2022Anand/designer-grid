"use client"
import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitTextJS from 'split-text-js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardOne from '@/Components/Cards/CardOne';
import CardTwo from '@/Components/Cards/CardTwo';
import CardThree from '@/Components/Cards/CardThree';
import ColorMode from '@/Components/ColorMode';
const page = () => {
  //gsap animation
  gsap.registerPlugin(ScrollTrigger)
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

    //animation for cards
    [".card-1", ".card-2", ".card-3"].forEach(card => {
      gsap.to(card, {
        position: 'sticky',
        top: "5%",
        scale: .8,
        opacity: .8,
        scrollTrigger: {
          trigger: card,
          scroller: "body",
          start: "top 10%",
          end: "top -40%",
          scrub: true,
        }
      })
    })
  }, []);

  return (
    <>
      {/* hero section */}
      <section className='hero-section'>
        <ColorMode mode={{ convertColor: "#1E1E1E", convertText: "#F5F5F5", convertHighlight:"#F77F00",id:"dark" }} />
        <ColorMode mode={{ convertColor: "#0033A0", convertText: "#FFD700", convertHighlight: "#4B4B4B", id: "royalBlueThunder" }} />
        <ColorMode mode={{ convertColor: "#FFFFFF", convertText: "#1F1F1F", convertHighlight: "#87CEEB", id: "brightLight" }} />
        <ColorMode mode={{ convertColor: "#FF4500", convertText: "#2F2F2F", convertHighlight: "#FFA500", id: "fireHeat" }} />
        <ColorMode mode={{ convertText: "#000000", convertColor: "#39FF14", convertHighlight: "#00FFFF", id: "darkNeonGreen" }} />

        <div>
          <span >DESIGNER </span> <span className='rounded-2xl px-1 bg-[--text-color] text-[--bg-color]'>GRID</span>
        </div>
        <div className='quote text-[3vw]'>
          {["From Simple Design", "To Super animation", "And ...", "A touch of 3D"].map((quote, index) => {
            return <p className="quote-text" key={index}>{quote}</p>
          })}
        </div>
      </section>

      {/* all cards section */}
      <section className='cards-section p-3'>
        <CardOne />
        <CardTwo />
        <CardThree />
      </section>

    </>
  )
}

export default page