'use client'

import { useEffect } from 'react'

export default function ParticleBackground() {
  useEffect(() => {
    const particleContainer = document.createElement('div')
    particleContainer.className = 'particle-container'
    document.body.prepend(particleContainer)

    // Create particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
        particle.style.animationDelay = Math.random() * 5 + 's'
        particle.style.setProperty('--x-offset', (Math.random() * 200 - 100) + 'px')
        particleContainer.appendChild(particle)
      }, i * 100)
    }

    return () => {
      particleContainer.remove()
    }
  }, [])

  return null
}


