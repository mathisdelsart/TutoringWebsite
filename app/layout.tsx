import './globals.css'
import { Outfit } from 'next/font/google'
import profData from '@/data/prof.json'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: profData.siteTitle,
  description: profData.description,
  openGraph: {
    title: profData.siteTitle,
    description: profData.description,
    images: [
      {
        url: profData.ogImage,
        width: 1200,
        height: 630,
        alt: profData.ogImageAlt,
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
