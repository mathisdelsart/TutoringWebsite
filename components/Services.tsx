'use client'

interface ServicesProps {
  services: string[]
}

export default function Services({ services }: ServicesProps) {
  const subjects = [
    {
      title: 'Mathématiques',
      items: [
        'Algèbre et calcul avancé',
        'Géométrie et trigonométrie',
        'Analyse et fonctions',
        'Statistiques et probabilités',
        'Préparation aux examens et concours'
      ],
      equations: ['f(x)=ax²+bx+c', '∫', '∇', 'π', '√', '∑', '∞', 'α', 'β', 'γ']
    },
    {
      title: 'Physique',
      items: [
        'Mécanique classique et moderne',
        'Électricité et électromagnétisme',
        'Optique géométrique et ondulatoire',
        'Thermodynamique et énergie',
        'Préparation aux examens et concours'
      ],
      equations: ['E=mc²', 'F=ma', 'V=IR', 'λ', 'ω', 'ν', 'Q', 'P', 'W', 'h']
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
            Un accompagnement complet et sur-mesure dans les matières scientifiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="card p-12 card-hover group transform transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Equation background - appears on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                {subject.equations.map((eq, i) => (
                  <div
                    key={i}
                    className="absolute text-6xl font-bold text-white/5"
                    style={{
                      top: `${Math.random() * 80}%`,
                      left: `${Math.random() * 80}%`,
                      transform: `rotate(${Math.random() * 30 - 15}deg)`,
                      transitionDelay: `${i * 0.1}s`
                    }}
                  >
                    {eq}
                  </div>
                ))}
              </div>
              
              <h3 className="text-4xl font-bold mb-8 gradient-text relative z-10">{subject.title}</h3>
              <ul className="space-y-3 mb-8 relative z-10">
                {subject.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-success text-xl font-bold mt-1">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-textSecondary font-semibold relative z-10">
                Niveau Secondaires
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
