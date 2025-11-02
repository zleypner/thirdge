'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-content">
        <h2 className="section-title glow-text">LET&apos;S BUILD TOGETHER</h2>
        <p className="contact-description">
          Want to work with us? Let&apos;s create your Web3 advantage.
        </p>
        <a href="mailto:contact@thirdage.com" className="cta-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          CONTACT THIRDGE
        </a>
      </div>
      <footer className="footer">
        <p>© 2025 Thirdge. Building the decentralized future.</p>
      </footer>
    </section>
  )
}



