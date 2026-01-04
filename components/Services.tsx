'use client'

interface ServicesProps {
  services: string[]
}

export default function Services({ services }: ServicesProps) {
  const subjects = [
    {
      title: 'Mathématiques',
      levels: '1re → 6e Secondaire',
      levelBadge: '1-6',
      topics: ['Analyse', 'Algèbre', 'Trigonométrie', 'Géométrie', 'Statistiques'],
      gradient: 'from-indigo-400 via-purple-500 to-pink-500',
      borderGradient: 'from-indigo-500 to-pink-500',
      glowColor: 'indigo',
      benefits: [
        'Maîtrise approfondie du programme officiel',
        'Méthodologie personnalisée selon le niveau',
        'Préparation efficace aux évaluations',
        'Explications claires, structurées et visuelles'
      ]
    },
    {
      title: 'Physique',
      levels: '3e → 6e Secondaire',
      levelBadge: '3-6',
      topics: ['Électricité', 'Mécanique', 'Optique', 'Ondes', 'Thermodynamique'],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      borderGradient: 'from-cyan-500 to-indigo-500',
      glowColor: 'cyan',
      benefits: [
        'Maîtrise approfondie du programme officiel',
        'Approche concrète par exemples réels',
        'Préparation ciblée aux évaluations',
        'Concepts complexes expliqués simplement'
      ]
    },
    {
      title: 'Programmation Python',
      levels: 'Niveau Débutants',
      levelBadge: 'Py',
      topics: ['Bases', 'Projets', 'Game Dev', 'Algorithmes', 'Logique'],
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      borderGradient: 'from-emerald-500 to-cyan-500',
      glowColor: 'emerald',
      benefits: [
        'De zéro aux projets concrets',
        'Apprentissage ludique, progressif et pratique',
        'Compréhension théorique des concepts clés',
        'Compétence clé recherchée sur le marché'
      ]
    }
  ]

  return (
    <section id="matieres" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mes Spécialités
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            Maths, Physique & Programmation • Un accompagnement complet et sur-mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Pulsing neon border - Réduit sur mobile */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${subject.borderGradient} rounded-2xl sm:rounded-3xl opacity-50 group-hover:opacity-100 animate-[pulse_2s_ease-in-out_infinite]`}></div>

              {/* Intense glow on hover - Désactivé sur mobile pour performance */}
              <div className={`hidden sm:block absolute -inset-2 bg-gradient-to-r ${subject.borderGradient} rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

              {/* Shine effect that traverses the card - Désactivé sur mobile */}
              <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>

              {/* Glassmorphism card */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 xl:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 flex-1 flex flex-col">
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
                      {/* Colored background effect - Réduit sur mobile */}
                      <div className={`absolute -inset-2 bg-gradient-to-r ${subject.gradient} opacity-20 rounded-lg`}></div>
                      <h3 className="relative text-xl sm:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-lg">
                        {subject.title}
                      </h3>
                    </div>
                    <div className="relative group/badge flex-shrink-0 -mt-2 -mr-2">
                      {/* Badge glow - Désactivé pour performance */}
                      <div className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${subject.gradient} shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                        <span className="text-base sm:text-lg lg:text-xl font-black text-white drop-shadow-md">{subject.levelBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Level description */}
                  <p className="text-sm sm:text-base text-gray-300 font-semibold mb-3 sm:mb-4">
                    {subject.levels}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-xs font-medium text-white hover:bg-white/20 sm:hover:scale-105 transition-all duration-200"
                      >
                        {topic}
                      </span>
                    ))}

                    {/* Ellipsis indicator */}
                    <span className="px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs italic text-white/50 select-none">
                      … et bien plus
                    </span>
                  </div>

                  {/* Benefits list with staggered check animations */}
                  <ul className="space-y-2 sm:space-y-3">
                    {subject.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 text-gray-300 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500"
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
