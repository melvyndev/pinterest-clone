"use client"
import { Session } from 'inspector'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

function Provider({children}) {
  return (
    <SessionProvider>
{children}
</SessionProvider>
        
  )
}

export default Provider;