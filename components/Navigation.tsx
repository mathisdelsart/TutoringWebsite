'use client'

import { useEffect, useState } from 'react'
import { Sigma, Pi, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    ['Accueil', 'accueil'],
    ['Méthode', 'methode'],
    ['Matières', 'matieres'],
    ['Témoignages', 'temoignages'],
    ['Contact', 'contact']
  ]

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90' : 'bg-background/60'
      } backdrop-blur-xl border-b border-primary/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 sm:py-5 lg:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative hidden sm:block">
              <Sigma className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={2.5} />
              <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-accent/30 transition-colors duration-300" />
            </div>
            <div className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
              <span className="gradient-text">MATHS</span>
              <span className="text-white/40 mx-1 sm:mx-2">×</span>
              <span className="gradient-text">PHYSIQUE</span>
            </div>
            <div className="relative hidden sm:block">
              <Pi className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent group-hover:text-primary transition-colors duration-300" strokeWidth={2.5} />
              <div className="absolute inset-0 blur-xl bg-accent/30 group-hover:bg-primary/30 transition-colors duration-300" />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 xl:gap-12 list-none">
            {menuItems.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-white text-sm xl:text-base font-medium transition-all duration-300 relative py-2 hover:text-accent hover:[text-shadow:0_0_20px_rgba(236,72,153,0.5)]
                    before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5
                    before:bg-gradient-to-r before:from-primary before:to-accent before:transition-all before:duration-300
                    hover:before:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-[73px] sm:top-[81px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/20 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="px-4 py-6 space-y-1">
            {menuItems.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleMenuClick}
                  className="block px-4 py-3 text-white font-medium text-lg rounded-lg hover:bg-primary/10 hover:text-accent transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
