import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const automatisation = await prisma.automatisation.findUnique({
      where: { id: parseInt(id) },
    })

    if (!automatisation) {
      return NextResponse.json({ error: 'Automatisation non trouvée' }, { status: 404 })
    }

    return NextResponse.json(automatisation)
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'automatisation:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'automatisation' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
      const { id } = params
      const body = await request.json()
      const { name, repoUrl, hour, jobName, token, description } = body
  
      const updatedAutomatisation = await prisma.automatisation.update({
        where: { id: parseInt(id) },
        data: {
          name,
          repoUrl,
          hour,
          jobName,
          token,
          description,
        },
      })
  
      return NextResponse.json(updatedAutomatisation)
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'automatisation:', error)
      return NextResponse.json(
        { error: 'Erreur lors de la mise à jour de l\'automatisation' },
        { status: 500 }
      )
    } finally {
      await prisma.$disconnect()
    }
  }
