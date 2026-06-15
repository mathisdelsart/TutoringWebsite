'use client'

import { useLanguage } from '@/lib/i18n'

interface FooterProps {
  nom: string
  ville: string
}

export default function Footer({ nom, ville }: FooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="relative py-20 border-t border-primary/20">
      <div className="max-w-[1400px] mx-auto px-8 text-center">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

        <h3 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
          {t.footer.title}
        </h3>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t.footer.line1} <br />
          <span className="gradient-text font-semibold">{t.footer.line2}</span>
        </p>

        <p className="text-textSecondary text-sm mt-12 pt-8 border-t border-primary/10">
          © {new Date().getFullYear()} <span className="font-medium text-white">{nom}</span> • {t.footer.role.replace('{ville}', ville)}
        </p>
      </div>
    </footer>
  )
}
