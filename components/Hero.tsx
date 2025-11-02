'use client'

import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [glitchText, setGlitchText] = useState('THIRDGE')
  const heroContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxSpeed = 0.5

      if (heroContentRef.current && scrolled < window.innerHeight) {
        heroContentRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
        heroContentRef.current.style.opacity = String(1 - (scrolled / window.innerHeight) * 0.8)
      }
    }

    // Glitch effect
    const createGlitchEffect = () => {
      const originalText = 'THIRDGE'
      const glitchChars = '!<>-_\\/[]{}—=+*^?#________'
      let iterations = 0
      const maxIterations = 3

      const interval = setInterval(() => {
        setGlitchText(
          originalText
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index]
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join('')
        )

        iterations += 1/3

        if (iterations >= originalText.length + maxIterations) {
          setGlitchText(originalText)
          clearInterval(interval)
        }
      }, 30)
    }

    // Trigger glitch effect after a delay
    const glitchTimeout = setTimeout(() => {
      createGlitchEffect()
    }, 500)

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(glitchTimeout)
    }
  }, [])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" ref={heroContentRef}>
        <h1 className="hero-title glow-text">{glitchText}</h1>
        <h2 className="hero-subtitle">Web3 Innovation for the Future</h2>
        <p className="hero-description">
          Empowering entrepreneurs through decentralization & technology.
        </p>
        <a href="#contact" className="cta-button" onClick={scrollToContact}>
          LET&apos;S BUILD THE FUTURE
        </a>
      </div>
      <div className="hero-bg-overlay"></div>
    </section>
  )
}



