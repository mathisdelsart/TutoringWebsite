'use client'

interface ContactProps {
  email: string
  whatsapp: string
  nom: string
  zone: string
  modalites: string[]
  disponibilites: string
}

export default function Contact({ email, whatsapp, nom, zone, modalites, disponibilites }: ContactProps) {
  const whatsappLink = `https://wa.me/${whatsapp}?text=Bonjour ${nom}, je souhaiterais prendre des cours avec vous.`
  const emailLink = `mailto:${email}?subject=Demande de cours particuliers`

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: email,
      link: emailLink,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Réponse détaillée sous 24h'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: `+${whatsapp}`,
      link: whatsappLink,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      description: 'Réponse rapide et instantanée'
    },
    {
      icon: '💬',
      title: 'Messenger',
      value: 'Contacte-moi directement',
      link: 'https://m.me/votreprofil',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Chat direct et convivial'
    }
  ]

  return (
    <section id="contact" className="py-20 relative reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contacte-moi
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Prêt à transformer tes résultats ? Parlons-en !
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`relative overflow-hidden rounded-2xl p-6 flex items-center gap-6 group hover:scale-[1.02] transition-all duration-400 ${method.bgColor} border-2 ${method.borderColor} hover:shadow-2xl`}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {method.icon}
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-lg font-bold mb-1 text-white">{method.title}</h4>
                  <p className="text-gray-300 font-medium text-sm mb-1">{method.value}</p>
                  <p className="text-xs text-textSecondary italic">{method.description}</p>
                </div>
                <div className="text-white/50 group-hover:text-white/80 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
