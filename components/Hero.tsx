'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  nom: string
  matieres: string[]
  niveaux: string[]
  zone: string
  accroche: string
}

export default function Hero({ nom, matieres, niveaux, zone, accroche }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-20 items-center">
          {/* Texte principal */}
          <div className={`space-y-8 ${mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transforme tes <span className="gradient-text">difficultés</span> en <span className="gradient-text">réussites</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-textSecondary leading-relaxed">
              {accroche}
            </p>

            {/* Localisation bien visible */}
            <div className="card p-6 border-l-4 border-accent inline-block">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">Localisation & Horaires</h4>
                  <p className="text-gray-300 leading-relaxed">
                    📌 {zone}<br />
                    🏠 Cours à domicile ou en ligne<br />
                    📅 Disponible en semaine et weekend
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 max-w-lg">
              <div className="card card-hover p-6 text-center">
                <div className="text-5xl font-extrabold gradient-text mb-2">150+</div>
                <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Élèves</div>
              </div>
              <div className="card card-hover p-6 text-center">
                <div className="text-5xl font-extrabold gradient-text mb-2">8+</div>
                <div className="text-sm text-textSecondary uppercase tracking-wider font-semibold">Années d'exp</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="btn-primary">
                <span>🚀</span> Commencer maintenant
              </a>
              <a href="#temoignages" className="btn-secondary">
                <span>⭐</span> Avis élèves
              </a>
            </div>
          </div>

          {/* Profile Card 3D */}
          <div className={`perspective-1000 ${mounted ? 'animate-[fadeInUp_1s_ease-out_0.3s_backwards]' : 'opacity-0'}`}>
            <div className="card p-10 relative overflow-hidden transform-gpu transition-transform duration-500 hover:[transform:rotateY(5deg)_rotateX(-5deg)]"
                 style={{ transformStyle: 'preserve-3d' }}>
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary via-accent to-orange bg-[length:200%_200%] animate-[gradientSlide_3s_ease_infinite]"></div>
              
              {/* Profile Image */}
              <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mb-8 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] z-10 pointer-events-none"></div>
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🎓
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3">{nom}</h3>
                  <p className="text-textSecondary">Expert en pédagogie scientifique depuis 8 ans</p>
                </div>

                {/* Matières badges */}
                <div className="flex flex-wrap gap-3">
                  {matieres.map((matiere) => (
                    <span
                      key={matiere}
                      className="card px-4 py-2 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:bg-primary/40 hover:-translate-y-1"
                    >
                      {matiere === 'Mathématiques' ? '🔢' : '⚛️'} {matiere}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
