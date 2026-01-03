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
            const title = element.querySelector('h2')

            if (title) {
              const titleRect = title.getBoundingClientRect()
              const titlePosition = titleRect.top + window.scrollY
              const viewportHeight = window.innerHeight
              const titleHeight = titleRect.height
              const offsetPosition = titlePosition - (viewportHeight / 2 - titleHeight / 2) + 100

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            } else {
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
