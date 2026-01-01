import { Metadata } from 'next'
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const prof = getProfData()
  
  const title = `Prof de ${prof.matieres.join(' et ')} à ${prof.ville} – ${prof.nom}`
  const description = `${prof.nom}, professeur particulier de ${prof.matieres.join(' et ')} pour ${prof.niveaux.join(', ')} à ${prof.ville}. ${prof.accroche}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
    },
  }
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
      
      <main className="min-h-screen relative z-10">
        <Hero
          nom={prof.nom}
          matieres={prof.matieres}
          niveaux={prof.niveaux}
          zone={prof.zone}
          accroche={prof.accroche}
          modalites={prof.modalites}
        />
        
        <Services services={prof.services} />
        
        <Method methode={prof.methode} />
        
        <Temoignage temoignage={prof.temoignage} />
        
        <Contact
          email={prof.email}
          whatsapp={prof.whatsapp}
          nom={prof.nom}
          zone={prof.zone}
          modalites={prof.modalites}
          disponibilites={prof.disponibilites}
        />
        
        <footer className="relative py-20 border-t border-primary/20">
          <div className="max-w-[1400px] mx-auto px-8 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Prêt à démarrer ?
            </h3>
            <p className="text-textSecondary mb-8">
              Rejoins les élèves qui ont transformé leurs résultats
            </p>
            <a href="#contact" className="btn-primary relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">Commence ton parcours</span>
            </a>
            
            <p className="text-textSecondary text-sm mt-12 pt-8 border-t border-primary/10">
              © {new Date().getFullYear()} <span className="font-medium text-white">{prof.nom}</span> • Professeur particulier à {prof.ville}
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
