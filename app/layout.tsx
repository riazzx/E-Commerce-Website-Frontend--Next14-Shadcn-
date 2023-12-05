// "use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cam Store',
  description: 'A front end for a camera ecom website using next and shadcn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system"
        enableSystem>
          <Header />
          {children}
          </ThemeProvider>
          <Analytics />
        </body>
    </html>
  )
}
