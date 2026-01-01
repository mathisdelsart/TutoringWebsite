'use client'

interface ServicesProps {
  services: string[]
}

export default function Services({ services }: ServicesProps) {
  const subjects = [
    {
      title: 'Mathématiques',
      levels: '1ère → 6ème secondaire',
      levelBadge: '1-6',
      topics: ['Algèbre', 'Géométrie', 'Analyse', 'Statistiques'],
      gradient: 'from-indigo-400 via-purple-500 to-pink-500',
      borderGradient: 'from-indigo-500 to-pink-500',
      glowColor: 'indigo',
      benefits: [
        'Programme complet de secondaire',
        'Méthodologie adaptée à chaque niveau',
        'Préparation examens & concours',
        'Explications claires et visuelles'
      ]
    },
    {
      title: 'Physique',
      levels: '3ème → 6ème secondaire',
      levelBadge: '3-6',
      topics: ['Mécanique', 'Électricité', 'Optique', 'Thermodynamique'],
      gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
      borderGradient: 'from-cyan-500 to-indigo-500',
      glowColor: 'cyan',
      benefits: [
        'Expertise complète du programme',
        'Approche concrète avec exemples',
        'Préparation examens & concours',
        'Concepts complexes simplifiés'
      ]
    },
    {
      title: 'Programmation Python',
      levels: 'Débutants & Niveau avancé',
      levelBadge: 'Py',
      topics: ['Bases', 'Algorithmes', 'Projets', 'Data Science'],
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      borderGradient: 'from-emerald-500 to-cyan-500',
      glowColor: 'emerald',
      benefits: [
        'De zéro aux projets concrets',
        'Apprentissage ludique et pratique',
        'Portfolio de projets personnels',
        'Compétence recherchée sur le marché'
      ]
    }
  ]

  return (
    <section id="matieres" className="py-20 relative reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mes Spécialités
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Maths, Physique & Programmation • Un accompagnement complet et sur-mesure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Pulsing neon border */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${subject.borderGradient} rounded-3xl opacity-50 group-hover:opacity-100 blur-sm animate-[pulse_2s_ease-in-out_infinite]`}></div>
              
              {/* Intense glow on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${subject.borderGradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500`}></div>
              
              {/* Shine effect that traverses the card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>

              {/* Glassmorphism card */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Animated floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
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
                  <div className="flex items-start justify-between mb-6">
                    <h3 className={`text-3xl font-extrabold bg-gradient-to-r ${subject.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                      {subject.title}
                    </h3>
                    <div className="relative group/badge">
                      {/* Badge glow */}
                      <div className={`absolute -inset-2 bg-gradient-to-r ${subject.gradient} rounded-2xl opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-300`}></div>
                      <div className={`relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${subject.gradient} shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <span className="text-2xl font-black text-white drop-shadow-md">{subject.levelBadge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Level description */}
                  <p className="text-base text-gray-300 font-semibold mb-6">
                    {subject.levels}
                  </p>

                  {/* Topics badges with glassmorphism and individual animations */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {subject.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm font-medium text-white hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Benefits list with staggered check animations */}
                  <ul className="space-y-3">
                    {subject.benefits.map((benefit, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <svg 
                          className={`w-6 h-6 text-${subject.glowColor}-400 flex-shrink-0 mt-0.5 animate-[pulse_2s_ease-in-out_infinite]`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base leading-relaxed">{benefit}</span>
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
