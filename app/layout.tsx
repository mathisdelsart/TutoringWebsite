import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathis Delsart | Professeur particulier en maths, physique & Python',
  description:
    'Secondaire • À domicile ou en ligne • Belgique (Courcelles, Gouy-Lez-Piéton).'
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
