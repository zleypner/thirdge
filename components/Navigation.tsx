'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setIsScrolled(currentScroll > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const navStyle = {
    background: isScrolled ? 'rgba(10, 15, 31, 0.95)' : 'rgba(10, 15, 31, 0.8)',
    boxShadow: isScrolled ? '0 5px 20px rgba(0, 225, 255, 0.2)' : 'none',
  }

  return (
    <nav className="navbar" style={navStyle}>
      <div className="nav-container">
        <div className="logo">THIRD AGE</div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
          <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')}>Products</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

