'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scrolling pour tous les liens d'ancre
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            const offset = 80 // Offset pour la navigation fixe
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - offset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const revealPoint = 100
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  return null
}
