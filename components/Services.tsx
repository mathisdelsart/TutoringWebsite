'use client'

import { useLanguage } from '@/lib/i18n'

export default function Services() {
  const { t } = useLanguage()

  const visuals = [
    {
      levelBadge: '1-6',
      gradient: 'from-emerald-400 via-emerald-500 to-teal-500',
      borderGradient: 'from-emerald-500 to-teal-500',
      glowColor: 'emerald',
    },
    {
      levelBadge: '3-6',
      gradient: 'from-teal-400 via-teal-500 to-emerald-500',
      borderGradient: 'from-teal-500 to-emerald-500',
      glowColor: 'emerald',
    },
    {
      levelBadge: 'Py',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      borderGradient: 'from-green-500 to-emerald-500',
      glowColor: 'emerald',
    },
  ]

  const subjects = t.services.subjects.map((subject, i) => ({ ...subject, ...visuals[i] }))

  return (
    <section id="matieres" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Shine effect that traverses the card - Désactivé sur mobile */}
              <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>

              {/* Glassmorphism card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 xl:p-8 border border-slate-200 group-hover:border-emerald-200 transition-all duration-500 flex-1 flex flex-col">
                {/* Animated floating particles - Désactivé sur mobile */}
                <div className="hidden sm:block absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-24 h-24 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-all duration-700`}
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 25}%`,
                        animation: 'float 4s ease-in-out infinite',
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with LARGE prominent level badge */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
                    <div className="relative flex-1">
                      <h3 className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
                        {subject.title}
                      </h3>
                    </div>
                    <div className="relative group/badge flex-shrink-0">
                      <div className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${subject.gradient} shadow-sm shadow-emerald-600/20 transform group-hover:scale-105 transition-all duration-300`}>
                        <span className="text-xs sm:text-sm font-bold text-white">{subject.levelBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Level description */}
                  <p className="text-sm sm:text-base text-slate-600 font-semibold mb-3 sm:mb-4">
                    {subject.levels}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-medium text-slate-700 hover:bg-slate-200 sm:hover:scale-105 transition-all duration-200"
                      >
                        {topic}
                      </span>
                    ))}

                    {/* Ellipsis indicator */}
                    <span className="px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs italic text-slate-400 select-none">
                      {t.services.ellipsis}
                    </span>
                  </div>

                  {/* Benefits list with staggered check animations */}
                  <ul className="space-y-2 sm:space-y-3">
                    {subject.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-slate-600 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <svg
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-${subject.glowColor}-400 flex-shrink-0 mt-0.5 sm:animate-[pulse_2s_ease-in-out_infinite]`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
