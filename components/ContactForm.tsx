'use client'

import { useState } from 'react'
import { Mail, MessageCircle, Home, Video, Calculator, Lightbulb, Code } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

interface ContactFormProps {
  email: string
  whatsapp: string
  nom: string
}

export default function ContactForm({ email, whatsapp, nom }: ContactFormProps) {
  const { t } = useLanguage()
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

  const handleSubmit = async (platform: 'whatsapp' | 'email') => {
    const m = t.form.msg
    const subjectsText = formData.subjects.join(' + ')
    const periodText = formData.frequencyPeriod === 'semaine' ? m.periodWeek : m.periodMonth
    const frequencyText = formData.frequencyNumber
      ? m.freqValue.replace('{n}', formData.frequencyNumber).replace('{period}', periodText)
      : m.freqToDiscuss

    const modalityText = formData.location === 'domicile' ? m.modalityHome : m.modalityOnline
    const courseTypeText = formData.courseType === 'suivi' ? m.courseTypeRegular : m.courseTypeOneoff

    let message = `${m.greeting.replace('{nom}', nom)}

${m.intro}

━━━━━━━━━━━━━━━━━━━━━━━━━━

${m.student}
${formData.name}

${m.subjects}
${subjectsText}

${m.modality}
${modalityText}

${m.courseType}
${courseTypeText}`

    if (formData.reason) {
      message += `\n${formData.reason}`
    }

    if (formData.courseType === 'suivi') {
      message += `\n\n${m.frequency}
${frequencyText}`
    }

    message += `\n\n${m.availability}
${formData.availability}`

    if (formData.message) {
      message += `\n\n${m.message}
${formData.message}`
    }

    message += `\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━

${m.closing}`

    if (platform === 'whatsapp') {
      const whatsappMessage = encodeURIComponent(message)
      window.open(`https://wa.me/${whatsapp}?text=${whatsappMessage}`, '_blank')
    } else if (platform === 'email') {
      const emailSubject = encodeURIComponent(m.emailSubject.replace('{subjects}', subjectsText))
      const emailBody = encodeURIComponent(message)
      window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`
    }
  }

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value }

      // Validation pour la fréquence
      if (field === 'frequencyNumber') {
        const maxValue = prev.frequencyPeriod === 'semaine' ? 4 : 8
        const numValue = parseInt(value, 10)

        // Ne valider que si c'est un nombre valide
        if (!isNaN(numValue)) {
          if (numValue < 1) {
            newData.frequencyNumber = '1'
          } else if (numValue > maxValue) {
            newData.frequencyNumber = maxValue.toString()
          } else {
            newData.frequencyNumber = value
          }
        } else {
          // Permettre la saisie vide temporaire
          newData.frequencyNumber = value
        }
      }

      // Si on change la période, vérifier que la fréquence est toujours valide
      if (field === 'frequencyPeriod') {
        const maxValue = value === 'semaine' ? 4 : 8
        const currentNum = parseInt(prev.frequencyNumber, 10)

        if (!isNaN(currentNum) && currentNum > maxValue) {
          newData.frequencyNumber = maxValue.toString()
        }
      }

      return newData
    })
  }

  const toggleSubject = (subject: string) => {
    setFormData(prev => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
      return { ...prev, subjects }
    })
  }

  const subjectVisuals = [
    { icon: Calculator, color: 'from-indigo-500 to-purple-600' },
    { icon: Lightbulb, color: 'from-cyan-500 to-blue-600' },
    { icon: Code, color: 'from-emerald-500 to-teal-600' }
  ]
  const subjects = t.form.subjects.map((name, i) => ({ name, ...subjectVisuals[i] }))

  return (
    <div className="card p-8 max-w-2xl mx-auto relative">
      <h3 className="text-2xl font-bold text-white mb-2">{t.form.title}</h3>
      <p className="text-gray-400 mb-6 text-sm">{t.form.subtitle}</p>

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
                {t.form.labelName} <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder={t.form.placeholderName}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                {t.form.labelSubjects} <span className="text-accent">*</span>
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
              <p className="text-xs text-gray-500 mt-2">{t.form.subjectsHint}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                {t.form.labelModalite} <span className="text-accent">*</span>
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
                  <div className="text-sm font-medium">{t.form.optHome}</div>
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
                  <div className="text-sm font-medium">{t.form.optOnline}</div>
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!formData.name || formData.subjects.length === 0}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.form.btnContinue}
            </button>
          </div>
        )}

        {/* Step 2: Type de cours */}
        {step === 2 && (
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                {t.form.labelCourseType} <span className="text-accent">*</span>
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
                  <div className="text-lg font-semibold mb-1">{t.form.courseRegularTitle}</div>
                  <div className="text-xs text-gray-400">{t.form.courseRegularDesc}</div>
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
                  <div className="text-lg font-semibold mb-1">{t.form.courseOneoffTitle}</div>
                  <div className="text-xs text-gray-400">{t.form.courseOneoffDesc}</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                {t.form.labelReason}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {t.form.reasons.map((r) => (
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
                  {t.form.labelFrequency}
                </label>
                <div className="card p-3 sm:p-4 bg-white/5 border-primary/20">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <input
                      type="number"
                      min="1"
                      max={formData.frequencyPeriod === 'semaine' ? 4 : 8}
                      value={formData.frequencyNumber}
                      onChange={(e) => updateFormData('frequencyNumber', e.target.value)}
                      className="w-full sm:w-20 md:w-24 px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-primary/40 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary text-white text-center font-semibold transition-all text-base sm:text-lg"
                      placeholder="2"
                    />
                    <span className="hidden sm:inline text-gray-300 font-medium">×</span>
                    <span className="hidden sm:inline text-gray-400 text-sm">{t.form.freqPer}</span>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => updateFormData('frequencyPeriod', 'semaine')}
                        className={`px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-xl border-2 transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap ${
                          formData.frequencyPeriod === 'semaine'
                            ? 'border-primary bg-primary/20 text-white'
                            : 'border-primary/30 bg-white/5 text-gray-400 hover:border-primary/50'
                        }`}
                      >
                        {t.form.freqWeek}
                      </button>
                      <button
                        type="button"
                        onClick={() => updateFormData('frequencyPeriod', 'mois')}
                        className={`px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-xl border-2 transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap ${
                          formData.frequencyPeriod === 'mois'
                            ? 'border-primary bg-primary/20 text-white'
                            : 'border-primary/30 bg-white/5 text-gray-400 hover:border-primary/50'
                        }`}
                      >
                        {t.form.freqMonth}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 sm:mt-3 text-center">{t.form.freqHint}</p>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary flex-1"
              >
                {t.form.btnBack}
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-primary flex-1"
              >
                {t.form.btnContinue}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Disponibilités et envoi */}
        {step === 3 && (
          <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t.form.labelAvailability} <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.availability}
                onChange={(e) => updateFormData('availability', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all"
                placeholder={t.form.placeholderAvailability}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t.form.labelMessage}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-primary/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all resize-none"
                placeholder={t.form.placeholderMessage}
              />
            </div>

            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm text-gray-400 mb-4">{t.form.chooseContact}</p>

              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button
                  type="button"
                  onClick={() => handleSubmit('whatsapp')}
                  disabled={!formData.availability}
                  className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
                  <span className="text-[10px] sm:text-xs text-white/70 mt-1">{t.contact.whatsappDesc}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('email')}
                  disabled={!formData.availability}
                  className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex flex-col items-center gap-2"
                >
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  <span className="text-xs sm:text-sm font-medium">Email</span>
                  <span className="text-[10px] sm:text-xs text-white/70 mt-1">{t.contact.emailDesc}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full btn-secondary mt-4"
              >
                {t.form.btnBack}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
