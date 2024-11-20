'use client'

import { useState } from 'react'
import { Login } from './components/Login'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6">
      <div className="w-full max-w-md">
        <Login />
      </div>
    </main>
  )
}
