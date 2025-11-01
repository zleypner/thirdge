import type { Metadata } from 'next'
import { Orbitron, Rajdhani } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700', '900']
})

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Third Age - Web3 Innovation & Blockchain Solutions',
  description: 'Third Age is a pioneering Web3 company dedicated to building the decentralized future through innovative products, professional services, and blockchain education.',
  keywords: ['web3', 'blockchain', 'decentralization', 'crypto', 'third age', 'defi'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

