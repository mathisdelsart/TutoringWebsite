'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href) as HTMLElement
          if (element) {
            // Hauteur de la navigation
            const navHeight = 96
            
            // Calculer la hauteur de la viewport
            const viewportHeight = window.innerHeight
            
            // Hauteur de la section
            const sectionHeight = element.offsetHeight
            
            // Position de l'élément par rapport au haut de la page
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            
            // Pour la section accueil, on la positionne juste sous la nav
            if (href === '#accueil') {
              const offsetPosition = elementPosition - navHeight - 20
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            } else {
              // Pour les autres sections, on centre le contenu dans la viewport
              // en tenant compte de la navigation
              const availableHeight = viewportHeight - navHeight
              const offsetPosition = elementPosition - navHeight - (availableHeight - sectionHeight) / 2
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }
        }
      }
    }

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

    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  return null
}
