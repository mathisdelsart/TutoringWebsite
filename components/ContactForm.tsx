'use client'

import { useState } from 'react'
import { Mail, MessageCircle, MessagesSquare } from 'lucide-react'

interface ContactFormProps {
  email: string
  whatsapp: string
  nom: string
}

export default function ContactForm({ email, whatsapp, nom }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    location: 'domicile',
    courseType: 'suivi',
    reason: '',
    frequency: '',
    availability: '',
    message: ''
  })

  const [step, setStep] = useState(1)

  const handleSubmit = (platform: 'whatsapp' | 'messenger' | 'email') => {
    const message = `Bonjour ${nom},

Je souhaiterais prendre des cours avec vous.

📝 **Informations:**
Nom: ${formData.name}
Matière: ${formData.subject}

📍 **Modalité:** ${formData.location === 'domicile' ? 'Cours à domicile' : 'Cours en visio'}

📚 **Type de cours:** ${formData.courseType === 'suivi' ? 'Suivi régulier' : 'Cours ponctuels'}
${formData.reason ? `Raison: ${formData.reason}` : ''}

${formData.frequency ? `⏱️ **Fréquence souhaitée:** ${formData.frequency}` : ''}

📅 **Disponibilités:** ${formData.availability}

${formData.message ? `💬 **Message:**\n${formData.message}` : ''}

Merci !`

    if (platform === 'whatsapp') {
      const whatsappMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${whatsapp}?text=${whatsappMessage}`, '_blank')
    } else if (platform === 'messenger') {
      window.open('https://m.me/votreprofil', '_blank')
    } else if (platform === 'email') {
      const emailSubject = encodeURIComponent(`Demande de cours - ${formData.subject}`)
      const emailBody = encodeURIComponent(message)
      window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="card p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-2">Demande de cours</h3>
      <p className="text-gray-400 mb-6 text-sm">Remplissez ce formulaire pour me contacter directement</p>

      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gray-700'}`} />
        <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gray-700'}`} />
        <div className={`h-1 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gray-700'}`} />
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Step 1: Informations de base */}
        {step === 1 && (
          <div className="space-y-4 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Votre nom <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Matière souhaitée <span className="text-accent">*</span>
              </label>
              <select
                required
                value={formData.subject}
                onChange={(e) => updateFormData('subject', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white transition-all"
              >
                <option value="" className="bg-background">Sélectionnez une matière</option>
                <option value="Mathématiques" className="bg-background">Mathématiques</option>
                <option value="Physique" className="bg-background">Physique</option>
                <option value="Programmation Python" className="bg-background">Programmation Python</option>
                <option value="Autre" className="bg-background">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Modalité <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateFormData('location', 'domicile')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.location === 'domicile'
                      ? 'border-primary bg-primary/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-1">🏠</div>
                  <div className="text-sm font-medium">À domicile</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateFormData('location', 'visio')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.location === 'visio'
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-1">💻</div>
                  <div className="text-sm font-medium">En visio</div>
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name || !formData.subject}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          </div>
        )}

        {/* Step 2: Type de cours */}
        {step === 2 && (
          <div className="space-y-4 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Type de cours <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateFormData('courseType', 'suivi')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.courseType === 'suivi'
                      ? 'border-primary bg-primary/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-1">📚</div>
                  <div className="text-sm font-medium">Suivi régulier</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateFormData('courseType', 'ponctuel')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.courseType === 'ponctuel'
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-1">📝</div>
                  <div className="text-sm font-medium">Cours ponctuel</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Raison (optionnel)
              </label>
              <select
                value={formData.reason}
                onChange={(e) => updateFormData('reason', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white transition-all"
              >
                <option value="" className="bg-background">Sélectionnez une raison</option>
                <option value="Examen important" className="bg-background">Examen important</option>
                <option value="Interrogation" className="bg-background">Interrogation</option>
                <option value="Remise à niveau" className="bg-background">Remise à niveau</option>
                <option value="Difficultés en classe" className="bg-background">Difficultés en classe</option>
                <option value="Autre" className="bg-background">Autre</option>
              </select>
            </div>

            {formData.courseType === 'suivi' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fréquence souhaitée (optionnel)
                </label>
                <select
                  value={formData.frequency}
                  onChange={(e) => updateFormData('frequency', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white transition-all"
                >
                  <option value="" className="bg-background">Sélectionnez une fréquence</option>
                  <option value="1x/semaine" className="bg-background">1 fois par semaine</option>
                  <option value="2x/semaine" className="bg-background">2 fois par semaine</option>
                  <option value="3x+/semaine" className="bg-background">3 fois ou plus par semaine</option>
                  <option value="À discuter" className="bg-background">À discuter ensemble</option>
                </select>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary flex-1"
              >
                Retour
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-primary flex-1"
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Disponibilités et envoi */}
        {step === 3 && (
          <div className="space-y-4 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Vos disponibilités <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.availability}
                onChange={(e) => updateFormData('availability', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder="Ex: Lundi et mercredi soir, weekend"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message complémentaire (optionnel)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                placeholder="Des précisions supplémentaires..."
              />
            </div>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm text-gray-400 mb-4">Choisissez votre moyen de contact :</p>

              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmit('whatsapp')}
                  disabled={!formData.availability}
                  className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs font-medium">WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('messenger')}
                  disabled={!formData.availability}
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <MessagesSquare className="w-6 h-6" />
                  <span className="text-xs font-medium">Messenger</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('email')}
                  disabled={!formData.availability}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <Mail className="w-6 h-6" />
                  <span className="text-xs font-medium">Email</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full btn-secondary mt-4"
              >
                Retour
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
