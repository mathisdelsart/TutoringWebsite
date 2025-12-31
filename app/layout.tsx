import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'PageProf - Professeur Particulier Moderne',
  description: 'Trouvez votre professeur particulier avec une landing page qui fait la différence',
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
