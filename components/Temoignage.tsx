'use client'

import { useState, useEffect } from 'react'

interface TemoignageProps {
  temoignage?: {
    texte: string
    auteur: string
  }
}

export default function Temoignage({ temoignage }: TemoignageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      text: "Incroyable progression ! Je suis passé de 11/20 à 17/20 en maths en quelques mois. Les méthodes sont claires et efficaces, je recommande à 200% !",
      author: "Alexandre M.",
      role: "Terminale S",
      avatar: "AM"
    },
    {
      text: "Un professeur exceptionnel ! Ma fille a retrouvé confiance en elle et adore maintenant les sciences. Pédagogue, patient et à l'écoute.",
      author: "Sophie L.",
      role: "Parent d'élève",
      avatar: "SL"
    },
    {
      text: "Le meilleur prof que j'ai eu ! Explications ultra précises, exercices adaptés à mon niveau en prépa. J'ai enfin tout compris. Merci infiniment !",
      author: "Thomas C.",
      role: "Prépa MPSI",
      avatar: "TC"
    },
    {
      text: "Grâce aux cours, j'ai enfin compris les maths. La pédagogie est top, les explications sont claires et j'ai repris confiance. Mes notes ont beaucoup augmenté !",
      author: "Emma D.",
      role: "Première",
      avatar: "ED"
    },
    {
      text: "Mon fils était en difficulté en physique. Après quelques mois de cours, il a eu 16 au bac ! Un grand merci pour votre patience et votre expertise.",
      author: "Marc R.",
      role: "Parent d'élève",
      avatar: "MR"
    },
    {
      text: "Des cours de qualité qui m'ont permis de réussir mes partiels. Les concepts complexes deviennent accessibles. Je recommande vivement !",
      author: "Léa B.",
      role: "Licence Physique",
      avatar: "LB"
    },
    {
      text: "Excellente pédagogie ! J'étais perdu en trigonométrie, maintenant c'est devenu facile. Les exercices sont bien choisis et progressifs.",
      author: "Hugo F.",
      role: "Seconde",
      avatar: "HF"
    },
    {
      text: "Super prof ! Patient, à l'écoute et toujours disponible pour réexpliquer. Ma moyenne est passée de 10 à 15. Un vrai changement !",
      author: "Chloé V.",
      role: "Troisième",
      avatar: "CV"
    },
    {
      text: "Les cours m'ont sauvé pour le bac. J'ai compris des choses que je n'avais jamais comprises en classe. Résultat : mention bien !",
      author: "Lucas P.",
      role: "Terminale",
      avatar: "LP"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const maxSlides = Math.ceil(testimonials.length / 3)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => ((Math.floor(prev / 3) + 1) % maxSlides) * 3)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    const maxSlides = Math.ceil(testimonials.length / 3)
    setCurrentIndex((prev) => ((Math.floor(prev / 3) + 1) % maxSlides) * 3)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    const maxSlides = Math.ceil(testimonials.length / 3)
    setCurrentIndex((prev) => {
      const currentSlide = Math.floor(prev / 3)
      const prevSlide = (currentSlide - 1 + maxSlides) % maxSlides
      return prevSlide * 3
    })
    setIsAutoPlaying(false)
  }

  return (
    <section id="temoignages" className="py-32 relative reveal bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Témoignages
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            La réussite de mes élèves parle d'elle-même
          </p>
        </div>
        
        {/* Carrousel principal - 3 témoignages à la fois */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${Math.floor(currentIndex / 3) * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6 px-4">
                  {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                    <div key={index} className="card p-8 relative">
                      <div className="text-6xl mb-4 gradient-text opacity-50 leading-none">"</div>
                      <p className="text-base italic text-gray-300 mb-6 leading-relaxed min-h-[140px]">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.author}</h4>
                          <p className="text-xs text-textSecondary">{testimonial.role}</p>
                          <div className="flex gap-1 mt-1 text-yellow-500 text-sm">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
            aria-label="Témoignage précédent"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
            aria-label="Témoignage suivant"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 3)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-8 h-3 bg-primary' 
                  : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
