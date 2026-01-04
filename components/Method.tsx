'use client'

interface MethodProps {
  methode: string
}

import { UserCog, ClipboardCheck, MessageCircle } from 'lucide-react'

export default function Method({ methode }: MethodProps) {

const whyChoose = [
  {
    title: 'Pédagogie personnalisée',
    description: 'Chaque élève est unique. J’adapte mes séances et ma méthodologie à ton profil, tes objectifs et ton rythme d’apprentissage.',
    gradient: 'from-purple-500 to-pink-600',
    icon: <UserCog className="w-8 h-8 text-white" />
  },
  {
    title: 'Exercices & corrections',
    description: 'Je te propose des exercices adaptés à ton niveau selon tes besoins. Je prends le temps de corriger et d’expliquer chaque point pour t’aider à mieux comprendre et progresser.',
    gradient: 'from-blue-500 to-cyan-600',
    icon: <ClipboardCheck className="w-8 h-8 text-white" />
  },
  {
    title: 'Disponible en dehors des cours',
    description: 'En dehors des séances, je reste disponible pour de courtes questions, une vérification d’exercice ou une clarification rapide.',
    gradient: 'from-green-500 to-emerald-600',
    icon: <MessageCircle className="w-8 h-8 text-white" />
  }
]

  return (
    <section id="methode" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Pourquoi me choisir ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            Une approche personnalisée pour ta réussite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 xl:gap-8 max-w-7xl mx-auto">
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
                className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 xl:p-8 ${color.bg} border-2 ${color.border} hover:shadow-2xl transition-all duration-400 sm:hover:scale-105 group`}
              >
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:rotate-6 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
