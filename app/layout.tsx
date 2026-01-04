import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathis Delsart | Professeur particulier en maths, physique & Python',
  description:
    'Secondaire • À domicile ou en ligne • Belgique (Courcelles, Gouy-Lez-Piéton).',
  openGraph: {
    title: 'Mathis Delsart | Professeur particulier en maths, physique & Python',
    description:
      'Secondaire • À domicile ou en ligne • Belgique (Courcelles, Gouy-Lez-Piéton).',
    images: [
      {
        url: 'https://mathis003.github.io/cours-particuliers/app-image.png?v=4',
        width: 1200,
        height: 630,
        alt: 'Mathis Delsart – Professeur particulier',
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#6366F1',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
