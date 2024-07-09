"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

export default function PlaceOrder() {
const router = useRouter()

const handleOrder = () => {
    router.push('/checkout')
}
  return (
    <div>
        <button onClick={() => handleOrder()} className='border rounded flex justify-center items-center bg-blue-500 text-black hover:text-white '>Place order</button>
    </div>
  )
}
