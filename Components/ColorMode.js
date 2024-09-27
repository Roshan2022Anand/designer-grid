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
        <div onClick={toggleDarkMode} id={mode.id} className='w-[4vw] h-[4vw] rounded-full hover:scale-150 text-[7px]'
            style={{
                zIndex: 50,
                position: 'absolute',
                height: '4vw',
                width: '4vw',
                backgroundColor: mode.convertColor,
                top: `${gsap.utils.random(10, 30, 1)}%`,
                left: `${gsap.utils.random(10, 80, 1)}%`
            }}
        ></div>
    )
}

export default ColorMode

// now as a developer i want to host my personal projects and alos my client projects so i want a hosting platform so ihave two hard choice to make one is hostinger another one vercel in both i am ready to take the paid version but tell me all the pros, cons, extra features in a chart form

//     * i am in india so if there is any pros or cons for perticular hosting platform in india then mention it
//         * is it worth it for money may be for monthy or early
//             * past records
//                 * as i use react / next node / express mongo stack for development it matters for simplicity security scalability and storage 