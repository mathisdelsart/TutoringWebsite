'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Temoignage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Ma fille a adoré ses sessions sur la trigonométrie avec Mathis ; il maîtrise clairement le sujet et sait se mettre à la place de l’élève. Ses explications sont claires et il n’hésite pas à se répéter si nécessaire. Nous referons appel à lui sans hésitation.",
      author: "Charlier",
      role: "Parent d’élève – Maths",
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

  const maxSlides = Math.ceil(testimonials.length / 3)

  const nextSlide = () => {
    setCurrentIndex((prev) => ((Math.floor(prev / 3) + 1) % maxSlides) * 3)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const current = Math.floor(prev / 3)
      return ((current - 1 + maxSlides) % maxSlides) * 3
    })
  }

  return (
    <section id="temoignages" className="py-20 relative bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Témoignages
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            La réussite de mes élèves parle d'elle-même
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${Math.floor(currentIndex / 3) * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid md:grid-cols-3 gap-6 px-4"
                >
                  {testimonials
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((testimonial, index) => (
                      <div key={index} className="card p-8 relative flex flex-col justify-between">
                        <div className="absolute top-6 left-6 text-6xl gradient-text opacity-50 leading-none -rotate-12">"</div>

                        <div className="relative mt-8 mb-6">
                          <p className="text-base italic text-gray-300 leading-relaxed pb-6">
                            {testimonial.text}
                          </p>
                          <div className="absolute -bottom-4 right-0 text-6xl gradient-text opacity-50 leading-none rotate-[168deg] pointer-events-none">"</div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">
                              {testimonial.author}
                            </h4>
                            <p className="text-xs text-textSecondary">
                              {testimonial.role}
                            </p>
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

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / 3) === index
                  ? 'w-8 h-3 bg-primary'
                  : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
