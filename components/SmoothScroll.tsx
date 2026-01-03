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
          const element = document.querySelector(href) as HTMLElement
          if (element) {
            // Trouver le titre h2 dans la section
            const title = element.querySelector('h2')

            if (title) {
              // Centrer le titre dans le viewport, avec un offset pour descendre légèrement
              const titleRect = title.getBoundingClientRect()
              const titlePosition = titleRect.top + window.scrollY
              const viewportHeight = window.innerHeight
              const titleHeight = titleRect.height

              // Calculer la position pour centrer le titre
              // Position du titre - (moitié de la hauteur du viewport - moitié de la hauteur du titre)
              // On ajoute un offset de 100px pour descendre un peu et mieux centrer visuellement
              const offsetPosition = titlePosition - (viewportHeight / 2 - titleHeight / 2) + 100

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            } else {
              // Fallback si pas de titre h2 : comportement par défaut
              const navHeight = 96
              const elementPosition = element.getBoundingClientRect().top + window.scrollY
              const offsetPosition = elementPosition - navHeight - 20

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
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
