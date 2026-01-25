'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'

interface TemoignageProps {
  temoignage?: {
    texte: string
    auteur: string
  }
}

export default function Temoignage({ temoignage }: TemoignageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
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

  const testimonials = testimonialsData

  const maxSlides = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => {
      const currentSlide = Math.floor(prev / itemsPerSlide)
      const nextSlide = (currentSlide + 1) % maxSlides
      return nextSlide * itemsPerSlide
    })
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => {
      const currentSlide = Math.floor(prev / itemsPerSlide)
      const prevSlide = (currentSlide - 1 + maxSlides) % maxSlides
      return prevSlide * itemsPerSlide
    })
    setTimeout(() => setIsTransitioning(false), 500)
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
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
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
