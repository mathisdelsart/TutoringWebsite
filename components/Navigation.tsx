'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 border-b border-primary/10' : 'bg-transparent'
    } backdrop-blur-xl`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center py-6">
        <div className="font-mono text-2xl font-bold gradient-text animate-[glow_3s_ease-in-out_infinite]">
          ∫ MATH·PHYS ∫
        </div>
        <ul className="hidden md:flex gap-12 list-none">
          {[['Accueil', 'accueil'], ['Matières', 'matieres'], ['Méthode', 'methode'], ['Témoignages', 'temoignages'], ['Contact', 'contact']].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-white font-medium transition-all duration-300 relative py-2 hover:text-accent hover:[text-shadow:0_0_20px_rgba(236,72,153,0.5)] 
                  before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 
                  before:bg-gradient-to-r before:from-primary before:to-accent before:transition-all before:duration-300 
                  hover:before:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
