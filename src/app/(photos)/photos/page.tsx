import Photos from '@/app/components/Photos'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
    title:'Photos'
}
export default function page() {
  return (
    <>
    <Photos />
    </>
  )
}
