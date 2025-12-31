import Link from 'next/link'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center p-8 relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-7xl inline-block animate-[iconFloat_3s_ease-in-out_infinite]">✨</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Page</span><span className="gradient-text">Prof</span>
          </h1>
          <p className="text-2xl text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Votre landing page de professeur particulier,
            <span className="font-semibold text-white"> moderne et impactante</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/jean-dupont" className="btn-primary">
              <span>🚀</span> Voir la page exemple
            </Link>
            <Link href="/admin" className="btn-secondary">
              <span>⚙️</span> Accéder à l'admin
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
