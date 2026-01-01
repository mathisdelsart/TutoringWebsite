'use client'

interface MethodProps {
  methode: string
}

export default function Method({ methode }: MethodProps) {
  const whyChoose = [
    {
      title: 'Pédagogie Personnalisée',
      description: 'Chaque élève est unique. J\'adapte ma méthodologie à ton profil, tes objectifs et ton rythme d\'apprentissage.',
      gradient: 'from-purple-500 to-pink-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Suivi Continu',
      description: 'Évaluations régulières, feedback détaillé et ajustement constant pour maximiser ta progression.',
      gradient: 'from-blue-500 to-cyan-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Approche Moderne',
      description: 'Outils digitaux, exercices interactifs et explications claires pour rendre les sciences accessibles et passionnantes.',
      gradient: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section id="methode" className="py-20 relative reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pourquoi me choisir ?
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Une approche personnalisée pour votre réussite
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {whyChoose.map((item, index) => {
            const colors = [
              { bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
              { bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
              { bg: 'bg-green-500/10', border: 'border-green-500/30' }
            ]
            const color = colors[index]
            
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 ${color.bg} border-2 ${color.border} hover:shadow-2xl transition-all duration-400 hover:scale-105 group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-base text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
