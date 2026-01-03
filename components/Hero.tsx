'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HeroProps {
  nom: string
  matieres: string[]
  niveaux: string[]
  zone: string
  accroche: string
  modalites: string[]
}

export default function Hero({ nom, matieres, niveaux, zone, accroche, modalites }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-stretch">
          {/* Texte principal */}
          <div className={`flex flex-col justify-between space-y-6 ${mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
              Transforme tes difficultés<br/>
              en <span className="gradient-text">réussites</span>
            </h1>

            <div className="space-y-3 max-w-xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Ingénieur civil en Informatique & IA, passionné par l'enseignement.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Pédagogie moderne et personnalisée pour atteindre tes objectifs.
              </p>
            </div>

            {/* CTA Buttons - Dominant Primary */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-primary justify-center text-lg px-12 py-5 shadow-lg shadow-primary/40">
                Réserver un cours
              </a>
              <a href="#temoignages" className="btn-secondary justify-center text-base px-8 py-4">
                Témoignages
              </a>
            </div>

            {/* Stats - Sobres et clairs */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 max-w-md mb-6">
                <div className="card p-5 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold gradient-text mb-2">85+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Élèves accompagnés</div>
                </div>
                <div className="card p-5 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold gradient-text mb-2">+3</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Années d'expérience</div>
                </div>
              </div>

              {/* Quote - Simple et lisible */}
              <div className="card p-6 border-l-4 border-primary">
                <p className="text-lg italic text-gray-300 leading-relaxed">
                  "L'excellence n'est pas une destination, c'est un <span className="text-white font-semibold">voyage continu</span>"
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card - Simple et humaine */}
          <div className={`${mounted ? 'animate-[fadeInUp_1s_ease-out_0.2s_backwards]' : 'opacity-0'}`}>
            <div className="card p-0 overflow-hidden">
              {/* Profile Image - Naturelle sans overlay */}
              <div className="relative w-full aspect-[4/3.5] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                <Image
                  src="/face_image.jpeg"
                  alt={nom}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>

              {/* Profile Info */}
              <div className="p-6 space-y-4">
                {/* Nom */}
                <h3 className="text-2xl font-bold text-white">{nom}</h3>

                {/* Modalités */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Modalités</div>
                    <div className="text-sm text-gray-300 font-medium">{modalites.join(' • ')}</div>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Disponibilité
                    </div>
                    <div className="text-sm text-gray-300 font-medium">
                      Très flexible (semaine & week-end)
                    </div>
                  </div>
                </div>

                {/* Localisation - Clickable to Google Maps */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gouy-Lez-Piéton,+Belgique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:bg-white/5 -mx-2 px-2 py-2 rounded-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Localisation</div>
                    <div className="text-sm text-white font-semibold group-hover:text-accent transition-colors">{zone}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}