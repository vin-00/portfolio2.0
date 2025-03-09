import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ isDark, toggleTheme }) => {
  const [toggle, setToggle] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')
  const [isScrolling, setIsScrolling] = useState(true)
  const [showThemeOption, setShowThemeOption] = useState(true)

  useEffect(() => {
    const handleHeaderScroll = () => {
      const header = document.querySelector('.header')
      header?.classList.toggle('scroll-header', window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleHeaderScroll)
    return () => window.removeEventListener('scroll', handleHeaderScroll)
  }, [])

  useEffect(() => {
    const handleNavScroll = () => {
      if (!isScrolling) return
      
      const sections = ['home', 'about', 'skills', 'qualifications', 'portfolio', 'featured', 'contact']
      const scrollY = window.pageYOffset

      sections.forEach(section => {
        const sectionElement = document.getElementById(section)
        if (sectionElement) {
          const sectionHeight = sectionElement.offsetHeight
          const sectionTop = sectionElement.offsetTop - 50
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveNav(`#${section}`)
          }
        }
      })
    }

    window.addEventListener('scroll', handleNavScroll)
    handleNavScroll()
    return () => window.removeEventListener('scroll', handleNavScroll)
  }, [isScrolling])

  useEffect(() => {
    if (localStorage.getItem('selected-theme') === 'dark') {
      document.body.classList.add('dark-theme')
    }
  }, [])

  const handleNavClick = (href) => {
    setIsScrolling(false)
    setActiveNav(href)
    // Hide theme option in mobile view when clicking nav links
    if (window.innerWidth <= 768 && href !== '#theme') {
      setShowThemeOption(false)
      // Close mobile menu after navigation
      setToggle(false)
    }
    // Re-enable scrolling after navigation animation completes
    setTimeout(() => setIsScrolling(true), 1000)
  }

  const handleThemeClick = () => {
    handleNavClick('#theme')
    toggleTheme()
    setShowThemeOption(true)
  }

  const navLinks = [
    { href: '#home', icon: 'estate', text: 'Home' },
    { href: '#about', icon: 'user', text: 'About' },
    { href: '#skills', icon: 'file-alt', text: 'Skills' },
    { href: '#qualifications', icon: 'briefcase-alt', text: 'Qualifications' },
    { href: '#portfolio', icon: 'scenery', text: 'Projects' },
    { href: '#featured', icon: 'star', text: 'Featured' },
    { href: '#contact', icon: 'message', text: 'Contact' }
  ]

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>Vinay Khatri</a>
        <div className={`nav__menu ${toggle ? 'show-menu' : ''}`}>
          <ul className='nav__list grid'>
            {navLinks.map(({ href, icon, text }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`nav__link ${activeNav === href ? 'active-link' : ''}`}
                >
                  <i className={`uil uil-${icon} nav__icon`}></i> {text}
                </a>
              </li>
            ))}
            <li className={`theme-option ${!showThemeOption ? 'theme-hidden' : ''}`}>
              <div className='theme-toggle nav__link' onClick={handleThemeClick}>
                <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
                <span className="nav_link theme_text">{isDark ? 'Light' : 'Dark'}</span>
              </div>
            </li>
          </ul>

          <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
        </div>
        <div className='nav__toggle' onClick={() => {
          setToggle(!toggle)
          setShowThemeOption(true)
        }}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header