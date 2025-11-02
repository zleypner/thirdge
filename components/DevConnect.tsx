'use client'

import { useEffect, useRef } from 'react'

export default function DevConnect() {
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
    <section id="devconnect" className="devconnect-section" ref={sectionRef}>
      <div className="devconnect-content">
        <h2 className="section-title glow-text">DEVCONNECT + HACKATHON</h2>
        <p className="devconnect-text">
          Thirdge attended DevConnect to keep improving and building what&apos;s next. 
          Currently participating in a hackathon, building disruptive decentralized products.
        </p>
      </div>
    </section>
  )
}



