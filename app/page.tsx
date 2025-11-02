'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import DevConnect from '@/components/DevConnect'
import BrewFi from '@/components/BrewFi'
import WhyWeb3 from '@/components/WhyWeb3'
import Contact from '@/components/Contact'
import CursorGlow from '@/components/CursorGlow'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  useEffect(() => {
    // Console message
    console.log('%c🚀 Welcome to Thirdge - Building the Decentralized Future',
      'color: #00E1FF; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00E1FF;')
    console.log('%cWeb3 Innovation for the Future',
      'color: #00E1FF; font-size: 12px;')
  }, [])

  return (
    <>
      <CursorGlow />
      <ParticleBackground />
      <Hero />
      <Services />
      <DevConnect />
      <BrewFi />
      <WhyWeb3 />
      <Contact />
    </>
  )
}



