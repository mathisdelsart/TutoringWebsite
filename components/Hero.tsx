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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 items-start">
          {/* Texte principal */}
          <div className={`space-y-8 ${mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transforme tes <span className="gradient-text">difficultés</span> en <span className="gradient-text">réussites</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
              {accroche}
            </p>

            {/* Stats Grid avec design qui pète */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative card card-hover p-8 text-center border-2 border-primary/30">
                    <div className="text-6xl font-extrabold gradient-text mb-2 animate-[iconFloat_3s_ease-in-out_infinite]">150+</div>
                    <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Élèves accompagnés</div>
                  </div>
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-orange to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative card card-hover p-8 text-center border-2 border-accent/30">
                    <div className="text-6xl font-extrabold gradient-text mb-2 animate-[iconFloat_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>3</div>
                    <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Années d'expérience</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons redesignés */}
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#contact" className="btn-primary group flex-1 justify-center text-lg py-5">
                  <span className="text-2xl group-hover:scale-125 transition-transform inline-block">🚀</span>
                  <span className="font-bold">Commencer maintenant</span>
                </a>
                <a href="#temoignages" className="btn-secondary group flex-1 justify-center text-lg py-5">
                  <span className="text-2xl group-hover:scale-125 transition-transform inline-block">⭐</span>
                  <span className="font-bold">Avis élèves</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card redesignée */}
          <div className={`${mounted ? 'animate-[fadeInUp_1s_ease-out_0.3s_backwards]' : 'opacity-0'} sticky top-24`}>
            <div className="card p-8 relative overflow-hidden transform-gpu transition-transform duration-500 hover:[transform:rotateY(5deg)_rotateX(-5deg)]" style={{ transformStyle: 'preserve-3d' }}>
              {/* Top gradient bar animé */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary via-accent to-orange bg-[length:200%_200%] animate-[gradientSlide_3s_ease_infinite]"></div>
              
              {/* Profile Image */}
              <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 overflow-hidden">
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
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  🎓
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{nom}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">
                    🎓 Ingénieur civil Informatique & IA<br/>
                    ✨ 3 ans d'expérience en enseignement
                  </p>
                </div>

                {/* Matières badges */}
                <div className="flex flex-wrap gap-2">
                  {matieres.map((matiere) => (
                    <span
                      key={matiere}
                      className="card px-3 py-2 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:bg-primary/40 hover:-translate-y-1"
                    >
                      {matiere === 'Mathématiques' ? '🔢' : '⚛️'} {matiere}
                    </span>
                  ))}
                </div>

                {/* Localisation redesignée */}
                <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
                  <div className="relative space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span className="text-xl">📍</span>
                      <span>{zone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span className="text-xl">🏠</span>
                      <span>{modalites.join(' • ')}</span>
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
