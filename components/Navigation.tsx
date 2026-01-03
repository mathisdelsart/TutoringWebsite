'use client'

import { useEffect, useState } from 'react'
import { Sigma, Pi } from 'lucide-react'

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
      isScrolled ? 'bg-background/80' : 'bg-transparent'
    } backdrop-blur-xl border-b border-primary/20`}>
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center py-6">
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Sigma className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={2.5} />
            <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-accent/30 transition-colors duration-300" />
          </div>
          <div className="font-display text-2xl font-bold tracking-tight">
            <span className="gradient-text">MATHS</span>
            <span className="text-white/40 mx-2">×</span>
            <span className="gradient-text">PHYSIQUE</span>
          </div>
          <div className="relative">
            <Pi className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
            <div className="absolute inset-0 blur-xl bg-accent/30 group-hover:bg-primary/30 transition-colors duration-300" />
          </div>
        </div>
        <ul className="hidden md:flex gap-12 list-none">
          {[['Accueil', 'accueil'], ['Méthode', 'methode'], ['Matières', 'matieres'], ['Témoignages', 'temoignages'], ['Contact', 'contact']].map(([label, id]) => (
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
