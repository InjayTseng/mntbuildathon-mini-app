'use client'

import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import { Login } from './components/Login'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize Telegram WebApp
    WebApp.ready()
    setIsLoaded(true)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6">
      <div className="w-full max-w-md">
        <Login />
      </div>
    </main>
  )
}
