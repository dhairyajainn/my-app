import React from 'react'
import { useEffect } from 'react';

const Logout = () => {
    useEffect(()=>{
        localStorage.clear()
        window.location = '/'
    },[]);
  return (
    <>
    </>
  )
}

export default Logout