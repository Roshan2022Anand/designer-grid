"use client"
import React, { useContext, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { DesignConext } from '@/helper/MyContext';
const ColorMode = () => {
    const router = useRouter();
    const { contextSafe } = useGSAP();
    const { activeColorMode } = useContext(DesignConext);


    //function to pause the execution  of the program fro given time
    const waitExc = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    //function to convert the page into given color pallet
    const changePg = async (page, id, convertor, convertColor) => {
        const convertorEle = document.querySelector(`.${convertor}`);
        let currEle = document.getElementById(id);
        Object.assign(currEle.style, {
            backgroundColor: convertColor,
            color: "transparent"
        })
        const convertTl = gsap.timeline();
        contextSafe(() => {
            gsap.to(convertorEle, {
                position: "fixed",
                width: "100vw",
                height: "100vh",
                duration: .2
            })
            gsap.to(convertorEle, {
                position: "fixed",
                width: "100vw",
                height: "100vh",
                duration: .2
            })
        })
        await waitExc(3000);
        router.push(page)
    }

    //effect to change the particular colormode button 
    useEffect(() => {
        let currEle = document.querySelector(`#${activeColorMode}`);
        let currEleStick = document.querySelector(`.${activeColorMode}`);
        Object.assign(currEle.style, {
            backgroundColor: `var(--${activeColorMode}-bg-color)`,
            color: "transparent"
        })
        return () => {
            Object.assign(currEle.style, {
                backgroundColor: "transparent",
                color: `var(--${activeColorMode}-bg-color)`
            })
        }
    }, [activeColorMode])

    // #1E1E1E
    // #FF7043
    // #39FF14
    // #5A3D5C
    return (
        <div className='colorMode-section'>

            <div onClick={() => { changePg("/", "intro", "intro-convertor", "#1E1E1E") }} id='intro'
                className='colorMode text-[var(--intro-bg-color)]'>{"<Intro>"}
                <div className='colorModeStick intro'>
                    <div className='colorModeConvertor intro-convertor'></div>
                </div>
            </div>

            <div onClick={() => { changePg('/DesignPg', "design", "design-convertor", "39FF14") }} id='design'
                className='colorMode text-[var(--design-bg-color)] '>{"<Design>"}
                <div className='colorModeStick design'>
                    <div className='colorModeConvertor design-convertor'></div>
                </div>
            </div>

            <div onClick={() => { changePg("/DevPg", "dev", "dev-convertor", "#5A3D5C") }} id='dev'
                className='colorMode text-[var(--dev-bg-color)] '>{"<Dev>"}
                <div className='colorModeStick dev'>
                    <div className='colorModeConvertor dev-convertor'></div>
                </div>
            </div>

            <div onClick={() => { changePg("/SkillsPg", "skills", "skills-convertor", "FF7043") }} id='skills'
                className='colorMode text-[var(--skill-bg-color)] '>{"<Skills>"}
                <div className='colorModeStick skills'>
                    <div className='colorModeConvertor skills-convertor'></div>
                </div>
            </div>

        </div>

    )
}

export default ColorMode