"use client"
import React, { useState } from 'react'
import Alert from '../components/Alert'

export default function page() {
const [alerts, setAlerts] = useState<{id:number, alert: React.JSX.Element}[]>([])
const addAlert =() => {
    const updatedAlertsArray = [...alerts, {id: Date.now(), alert: <Alert />}]
    setAlerts(updatedAlertsArray)
}
  return (
    <>
    {/* alerts container */}
    <div className='flex flex-col justify-between items-start gap-2 m-2'>
        {/* alerts will appear here and also get stacked */}
        {alerts.map((item, index) => (
            <Alert key={index}/>
        ))}
        {/* button to trigger alerts */}
    </div>
    <button onClick={() => addAlert()}className='border-4 border-blue-300 rounded-md p-2 bg-blue-400 flex justify-center items-center text-white'>click to trigger alerts</button>
    </>
  )
}
