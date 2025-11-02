'use client'

import { useEffect, useRef } from 'react'

export default function BrewFi() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="products" className="brewfi-section" ref={sectionRef}>
      <div className="brewfi-content">
        <p className="featured-label">FEATURED PRODUCT</p>
        <h2 className="brewfi-title glow-text">BREWFI</h2>
        <div className="brewfi-description">
          <p>
            BrewFi – Web3 app that won an Avalanche Hackathon and received an investment round.
          </p>
          <p>
            Users can pay for food and coffee in crypto, while restaurants earn more with smarter software.
          </p>
          <p className="brewfi-tagline">Fast. Accessible. Designed for real people.</p>
        </div>
        <a href="#contact" className="cta-button">EXPLORE BREWFI</a>
      </div>
    </section>
  )
}




