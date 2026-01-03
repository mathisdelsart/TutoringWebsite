'use client'

import { useState } from 'react'
import { Mail, MessageCircle, MessagesSquare, Home, Video, Calculator, Lightbulb, Code } from 'lucide-react'

interface ContactFormProps {
  email: string
  whatsapp: string
  nom: string
}

export default function ContactForm({ email, whatsapp, nom }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    subjects: [] as string[],
    location: 'domicile',
    courseType: 'suivi',
    reason: '',
    frequencyNumber: '2',
    frequencyPeriod: 'semaine',
    availability: '',
    message: ''
  })

  const [step, setStep] = useState(1)

  const handleSubmit = (platform: 'whatsapp' | 'messenger' | 'email') => {
    const subjectsText = formData.subjects.join(' + ')
    const frequencyText = formData.frequencyNumber
      ? `${formData.frequencyNumber} fois / ${formData.frequencyPeriod}`
      : 'À discuter ensemble'

    const modalityText = formData.location === 'domicile' ? 'À domicile' : 'En visio'
    const courseTypeText = formData.courseType === 'suivi' ? 'Suivi régulier' : 'Cours ponctuels'

    let message = `Bonjour ${nom},

Je souhaiterais prendre des cours avec vous.

━━━━━━━━━━━━━━━━━━━━━━━━━━

ÉLÈVE
${formData.name}

MATIÈRE(S) SOUHAITÉE(S)
${subjectsText}

MODALITÉ
${modalityText}

TYPE DE COURS
${courseTypeText}`

    if (formData.reason) {
      message += `\n${formData.reason}`
    }

    if (formData.courseType === 'suivi') {
      message += `\n\nFRÉQUENCE
${frequencyText}`
    }

    message += `\n\nDISPONIBILITÉS
${formData.availability}`

    if (formData.message) {
      message += `\n\nMESSAGE
${formData.message}`
    }

    message += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━

Merci pour votre attention !`

    if (platform === 'whatsapp') {
      const whatsappMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${whatsapp}?text=${whatsappMessage}`, '_blank')
    } else if (platform === 'messenger') {
      window.open('https://m.me/votreprofil', '_blank')
    } else if (platform === 'email') {
      const emailSubject = encodeURIComponent(`Demande de cours - ${subjectsText}`)
      const emailBody = encodeURIComponent(message)
      window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleSubject = (subject: string) => {
    setFormData(prev => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
      return { ...prev, subjects }
    })
  }

  const subjects = [
    { name: 'Mathématiques', icon: Calculator, color: 'from-indigo-500 to-purple-600' },
    { name: 'Physique', icon: Lightbulb, color: 'from-cyan-500 to-blue-600' },
    { name: 'Python', icon: Code, color: 'from-emerald-500 to-teal-600' }
  ]

  return (
    <div className="card p-8 max-w-2xl mx-auto relative">
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
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Prénom de l'élève <span className="text-accent">*</span>
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
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Matière(s) souhaitée(s) <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {subjects.map((subject) => {
                  const Icon = subject.icon
                  const isSelected = formData.subjects.includes(subject.name)
                  return (
                    <button
                      key={subject.name}
                      type="button"
                      onClick={() => toggleSubject(subject.name)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        isSelected
                          ? `border-primary bg-gradient-to-br ${subject.color} text-white shadow-lg`
                          : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-primary'}`} />
                      <div className="text-xs font-medium">{subject.name}</div>
                    </button>
                  )
                })}
              </div>
              <p className="text-xs text-gray-500 mt-2">Vous pouvez sélectionner plusieurs matières</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Modalité <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateFormData('location', 'domicile')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                    formData.location === 'domicile'
                      ? 'border-primary bg-primary/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <Home className={`w-6 h-6 ${formData.location === 'domicile' ? 'text-primary' : 'text-gray-400'}`} />
                  <div className="text-sm font-medium">À domicile</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateFormData('location', 'visio')}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                    formData.location === 'visio'
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <Video className={`w-6 h-6 ${formData.location === 'visio' ? 'text-accent' : 'text-gray-400'}`} />
                  <div className="text-sm font-medium">En visio</div>
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name || formData.subjects.length === 0}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          </div>
        )}

        {/* Step 2: Type de cours */}
        {step === 2 && (
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Type de cours <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => updateFormData('courseType', 'suivi')}
                  className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                    formData.courseType === 'suivi'
                      ? 'border-primary bg-primary/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-lg font-semibold mb-1">Suivi régulier</div>
                  <div className="text-xs text-gray-400">Pour progresser durablement</div>
                </button>
                <button
                  type="button"
                  onClick={() => updateFormData('courseType', 'ponctuel')}
                  className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                    formData.courseType === 'ponctuel'
                      ? 'border-accent bg-accent/10 text-white'
                      : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                  }`}
                >
                  <div className="text-lg font-semibold mb-1">Cours ponctuel</div>
                  <div className="text-xs text-gray-400">Pour une aide ciblée</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Raison (optionnel)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Examen important', 'Interrogation', 'Remise à niveau', 'Autre'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => updateFormData('reason', formData.reason === r ? '' : r)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm ${
                      formData.reason === r
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-primary/30 bg-white/5 text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {formData.courseType === 'suivi' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Fréquence souhaitée (optionnel)
                </label>
                <div className="card p-4 bg-white/5 border-primary/20">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.frequencyNumber}
                      onChange={(e) => updateFormData('frequencyNumber', e.target.value)}
                      className="w-24 px-4 py-3 bg-background/50 border border-primary/40 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-white text-center font-semibold transition-all text-lg"
                      placeholder="2"
                    />
                    <span className="text-gray-300 font-medium">×</span>
                    <span className="text-gray-400">par</span>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => updateFormData('frequencyPeriod', 'semaine')}
                        className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                          formData.frequencyPeriod === 'semaine'
                            ? 'border-primary bg-primary/20 text-white'
                            : 'border-primary/30 bg-white/5 text-gray-400 hover:border-primary/50'
                        }`}
                      >
                        Semaine
                      </button>
                      <button
                        type="button"
                        onClick={() => updateFormData('frequencyPeriod', 'mois')}
                        className={`px-4 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${
                          formData.frequencyPeriod === 'mois'
                            ? 'border-primary bg-primary/20 text-white'
                            : 'border-primary/30 bg-white/5 text-gray-400 hover:border-primary/50'
                        }`}
                      >
                        Mois
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">Laissez vide pour discuter ensemble de la fréquence</p>
                </div>
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
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
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
                  <span className="text-[10px] text-white/70 mt-1">Réponse rapide</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('messenger')}
                  disabled={!formData.availability}
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <MessagesSquare className="w-6 h-6" />
                  <span className="text-xs font-medium">Messenger</span>
                  <span className="text-[10px] text-white/70 mt-1">Réponse très rapide</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('email')}
                  disabled={!formData.availability}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <Mail className="w-6 h-6" />
                  <span className="text-xs font-medium">Email</span>
                  <span className="text-[10px] text-white/70 mt-1">Réponse sous 24h</span>
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
