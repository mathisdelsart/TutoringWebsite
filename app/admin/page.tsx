'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ProfData {
  slug: string
  nom: string
  matieres: string[]
  niveaux: string[]
  ville: string
  zone: string
  accroche: string
  services: string[]
  methode: string
  modalites: string[]
  disponibilites: string
  email: string
  whatsapp: string
  temoignage?: {
    texte: string
    auteur: string
  }
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [profData, setProfData] = useState<ProfData | null>(null)

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
      loadProfData()
    }
  }, [])

  const loadProfData = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/prof')
      const data = await response.json()
      setProfData(data)
    } catch (err) {
      setError('Erreur lors du chargement des données')
    }
    setLoading(false)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (client-side for MVP)
    // In production, use server-side authentication
    if (password === 'prof2024') {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      loadProfData()
      setError('')
    } else {
      setError('Mot de passe incorrect')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin_authenticated')
    setPassword('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!profData) return

    setSaving(true)
    try {
      const response = await fetch('/api/prof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profData),
      })

      if (response.ok) {
        alert('Données sauvegardées avec succès !')
      } else {
        alert('Erreur lors de la sauvegarde')
      }
    } catch (err) {
      alert('Erreur lors de la sauvegarde')
    }
    setSaving(false)
  }

  const updateField = (field: keyof ProfData, value: any) => {
    if (!profData) return
    setProfData({ ...profData, [field]: value })
  }

  const updateArrayField = (field: keyof ProfData, value: string) => {
    if (!profData) return
    const items = value.split('\n').filter(item => item.trim())
    setProfData({ ...profData, [field]: items })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradients decoratifs */}
        <div className="gradient-bg top-0 left-1/4 w-[500px] h-[500px] bg-primary"></div>
        <div className="gradient-bg top-10 right-1/4 w-[400px] h-[400px] bg-secondary"></div>
        
        <div className="card p-10 w-full max-w-md mx-6 relative z-10">
          <h1 className="text-4xl font-semibold mb-2 text-center text-textPrimary">
            Admin
          </h1>
          <p className="text-textSecondary text-center mb-8">PageProf</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-textSecondary mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                placeholder="Entrez le mot de passe"
              />
            </div>
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-200">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loading || !profData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-textSecondary">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="gradient-bg top-0 left-1/4 w-[500px] h-[500px] bg-accent"></div>
      <div className="gradient-bg bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="card p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-textPrimary">
                Modifier ma page
              </h1>
              <p className="text-textSecondary">Personnalisez votre landing page</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 card rounded-xl text-textSecondary hover:text-textPrimary transition"
            >
              Déconnexion
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={profData.nom}
                  onChange={(e) => updateField('nom', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  Slug (URL de votre page)
                </label>
                <input
                  type="text"
                  value={profData.slug}
                  onChange={(e) => updateField('slug', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
                <p className="text-sm text-textSecondary mt-1">
                  Votre page sera accessible sur: /{profData.slug}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Matières (une par ligne)
              </label>
              <textarea
                value={profData.matieres.join('\n')}
                onChange={(e) => updateArrayField('matieres', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Niveaux (un par ligne)
              </label>
              <textarea
                value={profData.niveaux.join('\n')}
                onChange={(e) => updateArrayField('niveaux', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  Ville
                </label>
                <input
                  type="text"
                  value={profData.ville}
                  onChange={(e) => updateField('ville', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  Zone géographique
                </label>
                <input
                  type="text"
                  value={profData.zone}
                  onChange={(e) => updateField('zone', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Phrase d'accroche
              </label>
              <textarea
                value={profData.accroche}
                onChange={(e) => updateField('accroche', e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Services proposés (un par ligne)
              </label>
              <textarea
                value={profData.services.join('\n')}
                onChange={(e) => updateArrayField('services', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Ma méthode (description courte)
              </label>
              <textarea
                value={profData.methode}
                onChange={(e) => updateField('methode', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Modalités (une par ligne)
              </label>
              <textarea
                value={profData.modalites.join('\n')}
                onChange={(e) => updateArrayField('modalites', e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textSecondary mb-2">
                Disponibilités
              </label>
              <input
                type="text"
                value={profData.disponibilites}
                onChange={(e) => updateField('disponibilites', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-2">
                  WhatsApp (format: 33612345678)
                </label>
                <input
                  type="text"
                  value={profData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  required
                />
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-semibold mb-4 text-textPrimary">
                Témoignage (optionnel)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-textSecondary mb-2">
                    Texte du témoignage
                  </label>
                  <textarea
                    value={profData.temoignage?.texte || ''}
                    onChange={(e) => updateField('temoignage', {
                      ...profData.temoignage,
                      texte: e.target.value
                    })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textSecondary mb-2">
                    Auteur du témoignage
                  </label>
                  <input
                    type="text"
                    value={profData.temoignage?.auteur || ''}
                    onChange={(e) => updateField('temoignage', {
                      ...profData.temoignage,
                      auteur: e.target.value
                    })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-textPrimary"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 btn-primary disabled:opacity-50"
              >
                {saving ? 'Sauvegarde...' : 'Sauvegarder les modifications'}
              </button>
              <a
                href={`/${profData.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card px-8 py-4 rounded-xl font-medium text-textPrimary card-hover text-center"
              >
                Voir ma page
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-strong rounded-3xl border-purple-400/30 p-10">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-5xl font-black mb-2">
                <span className="gradient-text">Modifier ma page</span>
              </h1>
              <p className="text-purple-300">Personnalisez votre landing page</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 glass rounded-xl text-purple-200 hover:text-white transition border-purple-400/30"
            >
              Déconnexion 👋
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={profData.nom}
                  onChange={(e) => updateField('nom', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Slug (URL de votre page)
                </label>
                <input
                  type="text"
                  value={profData.slug}
                  onChange={(e) => updateField('slug', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
                <p className="text-sm text-purple-300/70 mt-1">
                  Votre page sera accessible sur: /{profData.slug}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Matières (une par ligne)
              </label>
              <textarea
                value={profData.matieres.join('\n')}
                onChange={(e) => updateArrayField('matieres', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Niveaux (un par ligne)
              </label>
              <textarea
                value={profData.niveaux.join('\n')}
                onChange={(e) => updateArrayField('niveaux', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Ville
                </label>
                <input
                  type="text"
                  value={profData.ville}
                  onChange={(e) => updateField('ville', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Zone géographique
                </label>
                <input
                  type="text"
                  value={profData.zone}
                  onChange={(e) => updateField('zone', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Phrase d'accroche
              </label>
              <textarea
                value={profData.accroche}
                onChange={(e) => updateField('accroche', e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Services proposés (un par ligne)
              </label>
              <textarea
                value={profData.services.join('\n')}
                onChange={(e) => updateArrayField('services', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Ma méthode (description courte)
              </label>
              <textarea
                value={profData.methode}
                onChange={(e) => updateField('methode', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Modalités (une par ligne)
              </label>
              <textarea
                value={profData.modalites.join('\n')}
                onChange={(e) => updateArrayField('modalites', e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Disponibilités
              </label>
              <input
                type="text"
                value={profData.disponibilites}
                onChange={(e) => updateField('disponibilites', e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  WhatsApp (format: 33612345678)
                </label>
                <input
                  type="text"
                  value={profData.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  required
                />
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border-purple-400/20">
              <h3 className="text-2xl font-bold mb-4 gradient-text-alt">
                Témoignage (optionnel)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Texte du témoignage
                  </label>
                  <textarea
                    value={profData.temoignage?.texte || ''}
                    onChange={(e) => updateField('temoignage', {
                      ...profData.temoignage,
                      texte: e.target.value
                    })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-2">
                    Auteur du témoignage
                  </label>
                  <input
                    type="text"
                    value={profData.temoignage?.auteur || ''}
                    onChange={(e) => updateField('temoignage', {
                      ...profData.temoignage,
                      auteur: e.target.value
                    })}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300/50"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition transform hover:scale-105 disabled:opacity-50"
              >
                {saving ? 'Sauvegarde... ⏳' : 'Sauvegarder les modifications ✨'}
              </button>
              <a
                href={`/${profData.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong border-purple-400/30 hover:border-purple-400/50 font-bold py-4 px-8 rounded-xl transition text-center"
              >
                Voir ma page 🚀
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
