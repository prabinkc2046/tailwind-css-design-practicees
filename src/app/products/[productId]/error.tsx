"use client"

import React from 'react'


type ErrorProps = {
    error: Error
}
export default function Error({error}: ErrorProps) {
  return (
    <div>Error: {error.message}</div>
  )
}
