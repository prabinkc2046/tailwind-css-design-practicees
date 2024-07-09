import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import photoQueryClient from './photoQueryClient'


export default function PhotoQueryClientProvider({children}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={photoQueryClient}>
        {children}
    </QueryClientProvider>
  )
}
