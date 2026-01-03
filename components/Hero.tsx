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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-violet-500/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute top-[30%] left-[45%] text-6xl text-primary/5 font-serif animate-[float_20s_ease-in-out_infinite]">∫</div>
        <div className="absolute top-[60%] left-[50%] text-5xl text-accent/5 font-serif animate-[float_25s_ease-in-out_infinite] animation-delay-5000">π</div>
        <div className="absolute top-[45%] right-[45%] text-4xl text-violet-400/5 font-mono animate-[float_30s_ease-in-out_infinite] animation-delay-10000">→</div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-end">
          <div className={`flex flex-col justify-between ${mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                Transforme tes <span className="gradient-text">difficultés</span><br/>
                en <span className="gradient-text">réussites</span> durables
              </h1>

              <div className="space-y-3 max-w-xl mb-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-nowrap">
  Ingénieur civil en Informatique & IA, passionné par l'enseignement.
</p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Pédagogie moderne et personnalisée pour atteindre tes objectifs.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:pr-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-5 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold gradient-text mb-2">85+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Élèves accompagnés</div>
                </div>
                <div className="card p-5 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-extrabold gradient-text mb-2">+3</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Années d'expérience</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-violet-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative px-8 py-5 rounded-2xl border border-primary/10 bg-gradient-to-br from-white/[0.02] to-transparent backdrop-blur-sm">
                  <p className="text-base font-light italic text-gray-300 leading-relaxed tracking-wide text-center">
                    <span className="text-primary/60 text-xl font-serif">"</span>
                    L'excellence n'est pas une destination,
                    <br />
                    c'est un <span className="text-white font-medium bg-gradient-to-r from-primary/20 to-accent/20 px-2 py-1 rounded">voyage continu</span>
                    <span className="text-primary/60 text-xl font-serif">"</span>
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="group relative flex items-center justify-between px-8 py-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 hover:from-primary/20 hover:via-secondary/20 hover:to-primary/20 border-2 border-primary/30 hover:border-primary/60 backdrop-blur-sm shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-500 hover:scale-[1.02] active:scale-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">Réserver un cours</div>
                    <div className="text-gray-400 text-sm">Commence ta transformation</div>
                  </div>
                </div>
                <svg className="w-6 h-6 text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-white/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          </div>

          <div className={`${mounted ? 'animate-[fadeInUp_1s_ease-out_0.2s_backwards]' : 'opacity-0'}`}>
            <div className="card p-0 overflow-hidden">
              <div className="relative w-full aspect-[4/3.8] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
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

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{nom}</h3>

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