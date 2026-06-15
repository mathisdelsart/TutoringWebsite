import { readFileSync } from 'fs'
import { join } from 'path'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Method from '@/components/Method'
import Contact from '@/components/Contact'
import Temoignage from '@/components/Temoignage'
import AnimatedBackground from '@/components/AnimatedBackground'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'

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

function getProfData(): ProfData {
  const filePath = join(process.cwd(), 'data', 'prof.json')
  const fileContents = readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

export async function generateStaticParams() {
  const prof = getProfData()
  return [
    { slug: prof.slug }
  ]
}

export default function ProfPage({ params }: { params: { slug: string } }) {
  const prof = getProfData()

  // Données structurées Schema.org
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: prof.nom,
    jobTitle: `Professeur particulier de ${prof.matieres.join(' et ')}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: prof.ville,
    },
    email: prof.email,
    telephone: `+${prof.whatsapp}`,
    description: prof.accroche,
    knowsAbout: prof.matieres,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <AnimatedBackground />
      <Navigation />
      <SmoothScroll />
      
      <main className="min-h-screen relative">
        <Hero
          nom={prof.nom}
          matieres={prof.matieres}
          niveaux={prof.niveaux}
          zone={prof.zone}
          accroche={prof.accroche}
          modalites={prof.modalites}
        />
        
        <Method methode={prof.methode} />
        
        <Services services={prof.services} />
        
        <Temoignage temoignage={prof.temoignage} />
        
        <Contact
          email={prof.email}
          whatsapp={prof.whatsapp}
          nom={prof.nom}
          zone={prof.zone}
          modalites={prof.modalites}
          disponibilites={prof.disponibilites}
        />
        
        <Footer nom={prof.nom} ville={prof.ville} />
      </main>
    </>
  )
}
