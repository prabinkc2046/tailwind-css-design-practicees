"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default function Alert() {
const [showAlert, setShowAlert] = useState(true);
const [hideBorder, setHideBorder] = useState(true);
const removeAlert = () => {
    setHideBorder(false)
    setTimeout(() => {
        setShowAlert(false)
    }, 500);
}
  return (
    // alert container 
    <button className={`border border-solid rounded-md border-green-500 border-opacity-30 bg-green-200 bg-opacity-90 ${showAlert ? 'flex' : 'hidden'} items-center justify-between text-black font-md`}>
        {/*text container  */}
        <span className='ml-[10px]'>Nice, you triggered this alert message!</span>

        {/* times sign to destroy the alert */}
        {/* times sign container */}
        <span onClick={() => removeAlert()} className={`border-8 border-double border-blue-700 ${hideBorder ? 'border-opacity-0' : 'border-opacity-100'} rounded-md flex justify-center items-center  h-14 w-12 ml-[10px]`}>
            {/* font awesome icon */}
            <FontAwesomeIcon icon={faTimes} className='text-blue-300 hover:text-blue-400 h-[50px]'/>
        </span>
    </button>
  )
}
