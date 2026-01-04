'use client'

import { useState } from 'react'
import { Mail, MessageCircle, MessagesSquare } from 'lucide-react'
import ContactForm from './ContactForm'

interface ContactProps {
  email: string
  whatsapp: string
  messenger?: string
  nom: string
  zone: string
  modalites: string[]
  disponibilites: string
}

export default function Contact({ email, whatsapp, messenger, nom, zone, modalites, disponibilites }: ContactProps) {
  const [showForm, setShowForm] = useState(false)
  const whatsappLink = `https://wa.me/${whatsapp}?text=Bonjour ${nom}, je souhaiterais prendre des cours avec vous.`
  const emailLink = `mailto:${email}?subject=Demande de cours particuliers`
  const messengerLink = messenger ? `https://m.me/${messenger}` : '#'

  const contactMethods = [
    {
      icon: <MessageCircle />,
      title: 'WhatsApp',
      value: `+32 468.38.63.54`,
      link: whatsappLink,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      description: 'Réponse rapide'
    },
    {
      icon: <MessagesSquare />,
      title: 'Messenger',
      value: 'Contacte-moi directement',
      link: messengerLink,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Réponse très rapide'
    },
    {
      icon: <Mail />,
      title: 'Email',
      value: email,
      link: emailLink,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Réponse sous 24h'
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contacte-moi
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            Prêt à transformer tes résultats ? Parlons-en !
          </p>

          {/* Toggle buttons */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button
                onClick={() => setShowForm(true)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  showForm
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-primary/30'
                }`}
              >
                <Mail className="w-4 h-4" />
                Formulaire de demande
              </button>
              <button
                onClick={() => setShowForm(false)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  !showForm
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-primary/30'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Contact direct
              </button>
            </div>
            <p className="text-xs text-gray-500 italic px-4 text-center">Le formulaire de demande est à privilégier pour un premier contact</p>
          </div>
        </div>

        {showForm ? (
          <ContactForm email={email} whatsapp={whatsapp} messenger={messenger} nom={nom} />
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 xl:gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-400 ${method.bgColor} border-2 ${method.borderColor} hover:shadow-2xl flex flex-col items-center text-center`}
              >
                {/* Effet de brillance au hover - Désactivé sur mobile */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {method.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{method.title}</h4>
                  <p className="text-gray-300 font-medium text-xs sm:text-sm mb-1 sm:mb-2 break-words">{method.value}</p>
                  <p className="text-xs text-textSecondary italic">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
