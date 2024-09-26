import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
const ColorMode = ({ mode }) => {
    //function to pause the execution  of the program fro given time
    const waitExc = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    //function to toggle dark mode
    const toggleDarkMode = async () => {
        gsap.to(`#${mode.id}`, {
            position: 'fixed',
            scale: 50,
            borderRadius: 0,
            duration: 0.5,
        })
        await waitExc(600)
        gsap.to(`#${mode.id}`, {
            position: 'absolute',
            scale: 1,
            borderRadius: "50%",
            duration: 0.1,
        })
        document.documentElement.style.setProperty('--bg-color', mode.convertColor);
        document.documentElement.style.setProperty('--text-color', mode.convertText);
        document.documentElement.style.setProperty('--highlight-color', mode.convertHighlight);
    }

    // useGSAP(() => {
    //     const moveAround = async () => {
    //         while (true) {
    //             gsap.to(`#${mode.id}`, {
    //                 duration: 10,
    //                 top: `${gsap.utils.random(10, 30, 1)}%`,
    //                 left: `${gsap.utils.random(10, 80, 1)}%`
    //             })
    //             await waitExc(10000); 
    //         }
    //     }
    //     moveAround();
    // },[])
    return (
        <div onClick={toggleDarkMode} id={mode.id} className='absolute w-[4vw] h-[4vw] rounded-full hover:scale-150 text-[7px]'
            style={{
                zIndex: 50,
                backgroundColor: mode.convertColor,
                top: `${gsap.utils.random(10, 30, 1)}%`,
                left: `${gsap.utils.random(10, 80, 1)}%`
            }}
        ></div>
    )
}

export default ColorMode