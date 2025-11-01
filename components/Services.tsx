'use client'

import { useEffect, useRef } from 'react'

export default function Services() {
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

      const cards = section.querySelectorAll('.service-card')
      cards.forEach((card, index) => {
        card.classList.add(`fade-in-delay-${(index % 3) + 1}`)
        observer.observe(card)
      })
    }

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <h2 className="section-title glow-text">WHAT WE OFFER</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Decentralized<br/>Business Solutions</h3>
          <div className="glow-divider"></div>
        </div>
        <div className="service-card featured">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3>Blockchain<br/>Education for<br/>Founders</h3>
          <div className="glow-divider"></div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h3>Web3 Product<br/>Design &<br/>Development</h3>
          <div className="glow-divider"></div>
        </div>
      </div>
    </section>
  )
}

