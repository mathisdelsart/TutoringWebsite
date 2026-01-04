'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TemoignageProps {
  temoignage?: {
    texte: string
    auteur: string
  }
}

export default function Temoignage({ temoignage }: TemoignageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1) // Mobile: 1 témoignage
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2) // Tablette: 2 témoignages
      } else {
        setItemsPerSlide(3) // Desktop: 3 témoignages
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const testimonials = [
    {
      text: "Ma fille a adoré ses sessions sur la trigonométrie avec Mathis ; il maîtrise clairement le sujet et sait se mettre à la place de l'élève. Ses explications sont claires et il n'hésite pas à se répéter si nécessaire. Nous referons appel à lui sans hésitation.",
      author: "Charlier",
      role: "Parent d'élève – Maths",
      avatar: "C"
    },
    {
      text: "Très satisfaite. Ponctuel, aimable. Mon fils a apprécié sa manière d’expliquer. À recommander.",
      author: "Stéphanie",
      role: "Parent d’élève – Physique",
      avatar: "S"
    },
    {
      text: "Mathis est un professeur excellent. Très sérieux et extrêmement ordonné. Il prépare ses cours à l’avance et donne des exercices pour le cours suivant. Je le recommande fortement !",
      author: "Soraya",
      role: "Parent d’élève – Physique",
      avatar: "S"
    },
    {
      text: "Notre fils Guido a eu un examen de passage en maths après une année très compliquée. En deux semaines (2h/jour), Mathis a revu et expliqué clairement une année complète. Guido a réussi son examen. Un immense merci pour son travail et sa patience !",
      author: "Sonik",
      role: "Parent d’élève – Mathématiques",
      avatar: "S"
    },
    {
      text: "Mon fils a suivi des cours de maths et de physique avec Mathis pour réussir sa seconde session (5ème option Math/Sciences). Il est disponible, poli et ponctuel. Il prépare ses cours à l’avance et est très organisé. Mon fils a réussi ses examens et est prêt à entamer sa rhéto. Je recommande Mathis comme professeur particulier.",
      author: "Laurence",
      role: "Parent d’élève – Maths & Physique",
      avatar: "L"
    },
    {
      text: "Très bon professeur, étude efficace dans une ambiance agréable. Ma fille, qui avait de grosses difficultés, a retrouvé confiance et réussi son examen. Je recommande vivement !",
      author: "Lolly",
      role: "Parent d’élève – Maths",
      avatar: "L"
    },
    {
      text: "Il m’a aidé pour mes examens et m’a permis de me remettre à niveau. Il explique clairement et s’adapte selon les besoins. Je vous le conseille sans hésiter.",
      author: "Jacqmin",
      role: "Ancien élève – Maths",
      avatar: "J"
    },
    {
      text: "Ayant reçu de l’aide de Mathis dans certains cours, je peux témoigner de sa capacité à expliquer clairement et à rendre accessibles des notions complexes, en particulier en mathématiques.",
      author: "Coralie",
      role: "Recommandation",
      avatar: "C"
    },
    {
      text: "Mathis a toujours su rendre les mathématiques et les sciences accessibles. Patient et pédagogue, il aide à comprendre et à faire des liens entre les concepts. Je le recommande vivement.",
      author: "Laurine",
      role: "Recommandation",
      avatar: "L"
    },
    {
      text: "Je recommande vivement Mathis pour des cours de mathématiques et de physique au secondaire. Grâce à ses explications claires et à son approche patiente, il aide réellement les élèves à progresser et à gagner en confiance.",
      author: "Thomas",
      role: "Recommandation",
      avatar: "T"
    }
  ]

  const maxSlides = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prev) => ((Math.floor(prev / itemsPerSlide) + 1) % maxSlides) * itemsPerSlide)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const current = Math.floor(prev / itemsPerSlide)
      return ((current - 1 + maxSlides) % maxSlides) * itemsPerSlide
    })
  }

  return (
    <section id="temoignages" className="py-12 sm:py-16 lg:py-20 relative bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Témoignages
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            La réussite de mes élèves parle d'elle-même
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="overflow-hidden px-2 sm:px-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${Math.floor(currentIndex / itemsPerSlide) * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`w-full flex-shrink-0 grid gap-4 sm:gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' :
                    itemsPerSlide === 2 ? 'grid-cols-2' :
                    'grid-cols-3'
                  }`}
                >
                  {testimonials
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((testimonial, index) => (
                      <div key={index} className="card p-5 sm:p-6 lg:p-8 relative flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-5xl lg:text-6xl gradient-text opacity-50 leading-none -rotate-12">"</div>

                        <div className="relative mt-6 sm:mt-8 mb-4 sm:mb-6">
                          <p className="text-sm sm:text-base italic text-gray-300 leading-relaxed pb-4 sm:pb-6">
                            {testimonial.text}
                          </p>
                          <div className="absolute -bottom-2 sm:-bottom-4 right-0 text-4xl sm:text-5xl lg:text-6xl gradient-text opacity-50 leading-none rotate-[168deg] pointer-events-none">"</div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-white text-sm sm:text-base truncate">
                              {testimonial.author}
                            </h4>
                            <p className="text-xs text-textSecondary truncate">
                              {testimonial.role}
                            </p>
                            <div className="flex gap-0.5 sm:gap-1 mt-1 text-yellow-500 text-xs sm:text-sm">
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

          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white z-10 shadow-lg"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white z-10 shadow-lg"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerSlide)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / itemsPerSlide) === index
                  ? 'w-6 sm:w-8 h-2 sm:h-3 bg-primary'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
