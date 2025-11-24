'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import navStyles from '../styles/nav.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu()
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className={styles.header} role="banner">
      <a className={styles['skip-link']} href="#main">
        Skip to content
      </a>
      <div className={styles.brand}>
        <Link href="/" aria-label="Neo-Brutalist Home">
          <strong className={styles.logo}>NEO-BRUTALIST</strong>
        </Link>
      </div>
      <button
        ref={buttonRef}
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label="Toggle navigation menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Primary"
        id="primary-navigation"
        className={isMenuOpen ? styles.navOpen : ''}
      >
        <ul className={styles.navList}>
          <li>
            <Link
              href="/"
              className={navStyles.nav_link}
              aria-current="page"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={navStyles.nav_link}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={navStyles.nav_link}
              onClick={closeMenu}
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              href="/people"
              className={navStyles.nav_link}
              onClick={closeMenu}
            >
              People
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
