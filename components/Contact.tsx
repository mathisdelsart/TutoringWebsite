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
  const messengerLink = messenger ? `https://m.me/${messenger}` : `fb-messenger://user/${messenger || ''}`

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
    <section id="contact" className="py-20 relative reveal">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contacte-moi
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto mb-6">
            Prêt à transformer tes résultats ? Parlons-en !
          </p>

          {/* Toggle buttons */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setShowForm(true)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
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
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  !showForm
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-primary/30'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Contact direct
              </button>
            </div>
            <p className="text-xs text-gray-500 italic">Le formulaire de demande est à privilégier pour un premier contact</p>
          </div>
        </div>

        {showForm ? (
          <ContactForm email={email} whatsapp={whatsapp} nom={nom} />
        ) : (
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`relative overflow-hidden rounded-2xl p-8 group hover:scale-105 transition-all duration-400 ${method.bgColor} border-2 ${method.borderColor} hover:shadow-2xl flex flex-col items-center text-center`}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-4xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {method.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3 text-white">{method.title}</h4>
                  <p className="text-gray-300 font-medium text-sm mb-2">{method.value}</p>
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
