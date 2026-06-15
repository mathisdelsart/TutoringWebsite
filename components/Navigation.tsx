'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = t.nav.items

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  const LangToggle = () => (
    <div
      className="flex items-center rounded-lg border border-primary/30 overflow-hidden text-xs sm:text-sm font-bold"
      role="group"
      aria-label={t.nav.toggleLabel}
    >
      <button
        onClick={() => setLang('fr')}
        className={`px-2.5 sm:px-3 py-1.5 transition-colors duration-300 ${
          lang === 'fr' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary/10'
        }`}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 sm:px-3 py-1.5 transition-colors duration-300 ${
          lang === 'en' ? 'bg-primary text-white' : 'text-gray-300 hover:bg-primary/10'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90' : 'bg-background/60'
      } backdrop-blur-xl border-b border-primary/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 sm:py-5 lg:py-6">
          {/* Logo */}
          <a href="#accueil" className="flex items-center group">
            <div className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
              <span className="gradient-text">{t.nav.brand}</span>
            </div>
          </a>

          {/* Right side: menu (desktop) + language toggle + mobile menu button */}
          <div className="flex items-center gap-4 lg:gap-8 xl:gap-12">
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

            <LangToggle />

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
