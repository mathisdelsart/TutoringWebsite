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
    <section id="accueil" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">
          {/* Texte principal */}
          <div className={`space-y-8 ${mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transforme tes <span className="gradient-text">difficultés</span> en <span className="gradient-text">réussites</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
              Ingénieur civil en Informatique & IA, passionné par l'enseignement.
              <br/><br/>
              Je te propose une pédagogie moderne et personnalisée pour atteindre tes objectifs et gagner en confiance !
            </p>

            {/* Stats Grid avec design qui pète */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* Glowing animated border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-75 group-hover:opacity-100 blur animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <div className="relative backdrop-blur-sm bg-background/90 card-hover p-8 text-center rounded-2xl">
                    {/* Sparkles effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="text-6xl font-extrabold gradient-text mb-2 animate-[iconFloat_3s_ease-in-out_infinite]">150+</div>
                    <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Élèves accompagnés</div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* Glowing animated border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-orange to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
                  <div className="relative backdrop-blur-sm bg-background/90 card-hover p-8 text-center rounded-2xl">
                    {/* Sparkles effect */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-orange rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                    <div className="text-6xl font-extrabold gradient-text mb-2 animate-[iconFloat_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>3</div>
                    <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Années d'expérience</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons redesignés */}
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <a href="#contact" className="btn-primary group flex-1 justify-center text-lg py-5 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative font-bold">Réserver un cours</span>
                </a>
                <a href="#temoignages" className="btn-secondary group flex-1 justify-center text-lg py-5 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative font-bold">Voir les témoignages</span>
                </a>
              </div>

              {/* Motivational Quote - Stylish */}
              <div className="relative overflow-hidden rounded-2xl p-6 group">
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-50 group-hover:opacity-75 blur animate-[pulse_4s_ease-in-out_infinite]"></div>
                
                {/* Glassmorphism background */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-white/10 p-6">
                  {/* Glow effects */}
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
                  <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}></div>
                  
                  <div className="text-center relative z-10">
                    <p className="text-lg italic text-white/90 leading-relaxed font-medium">
                      “<span className="gradient-text font-bold text-xl">L'excellence</span> n'est pas une destination,<br/>
                      c'est un <span className="gradient-text font-bold text-xl">voyage continu</span>”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card redesignée */}
          <div className={`${mounted ? 'animate-[fadeInUp_1s_ease-out_0.3s_backwards]' : 'opacity-0'} sticky top-24`}>
            <div className="card p-8 relative overflow-hidden transform-gpu transition-transform duration-500 hover:[transform:rotateY(5deg)_rotateX(-5deg)]" style={{ transformStyle: 'preserve-3d' }}>
              {/* Top gradient bar animé */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary via-accent to-orange bg-[length:200%_200%] animate-[gradientSlide_3s_ease_infinite]"></div>
              
              {/* Profile Name - Large at top */}
              <div className="text-center mb-6">
                <h3 className="text-4xl font-extrabold gradient-text">{nom}</h3>
              </div>

              {/* Profile Image */}
              <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] z-10 pointer-events-none"></div>
                <Image
                  src="/face_image.png"
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
              <div className="space-y-5">

                {/* Localisation redesignée */}
                <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="relative space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-textSecondary uppercase tracking-wider mb-1">Modalités</div>
                        <div className="text-gray-300 font-medium">{modalites.join(' • ')}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-textSecondary uppercase tracking-wider mb-1">Localisation</div>
                        <div className="text-white font-semibold">{zone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
