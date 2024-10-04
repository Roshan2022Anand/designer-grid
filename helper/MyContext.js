"use client"
import React, { createContext, useState } from 'react'
export const DesignConext = createContext();
const MyContext = ({ children }) => {
    const [activeColorMode, setactiveColorMode] = useState("intro");
  return (
  <DesignConext.Provider value={{activeColorMode,setactiveColorMode}}>
    {children}
  </DesignConext.Provider>
  )
}

export default MyContext