"use client";

import React, { useState } from 'react'

export default function InputForm() {
    const [input, setInput] = useState("")
  return (
    <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
)
}
