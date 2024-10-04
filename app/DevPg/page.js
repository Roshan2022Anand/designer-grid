"use client"
import { DesignConext } from '@/helper/MyContext';
import React, { useContext, useEffect } from 'react'

const page = () => {
    const { setactiveColorMode } = useContext(DesignConext);
    useEffect(() => {
        setactiveColorMode("dev")
    }, [])
    return (
        <main className='bg-[--dev-bg-color] text-[--dev-text-color] text-[4vw] w-full h-full flex flex-col justify-center items-center'>
            <div>development</div>
            <div className='text-[--dev-highlight-color]'>Hightlight</div>
        </main>
    )
}

export default page