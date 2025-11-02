'use client'

import { useEffect, useRef } from 'react'

export default function WhyWeb3() {
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
    <section id="why-web3" className="why-section" ref={sectionRef}>
      <h2 className="why-title glow-text">
        The future of money, ownership,<br/>and community → starts now.
      </h2>
    </section>
  )
}




