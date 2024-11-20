import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MNT Buildathon Mini App',
  description: 'A playful Telegram mini app for MNT Buildathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-tg-bg text-tg-text`}>
        {children}
      </body>
    </html>
  )
}
