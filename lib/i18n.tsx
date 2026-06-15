'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { translations, Lang, Translation } from '@/locales/translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'site-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to French; read a saved preference after mount to avoid hydration mismatch.
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
