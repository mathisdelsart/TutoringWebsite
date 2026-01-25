import { redirect } from 'next/navigation'
import profData from '@/data/prof.json'

export default function Home() {
  redirect(`/${profData.slug}`)
}
