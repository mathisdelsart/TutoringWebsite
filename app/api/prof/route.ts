import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFilePath = join(process.cwd(), 'data', 'prof.json')

export async function GET() {
  try {
    const fileContents = readFileSync(dataFilePath, 'utf8')
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la lecture des données' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validation basique
    if (!data.nom || !data.email || !data.slug) {
      return NextResponse.json(
        { error: 'Données invalides' },
        { status: 400 }
      )
    }

    // Sauvegarde dans le fichier JSON
    writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8')
    
    return NextResponse.json({ success: true, message: 'Données sauvegardées' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500 }
    )
  }
}
