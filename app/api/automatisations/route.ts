import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'



export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, repoUrl, hour, jobName, token, description } = body

    const newAutomatisation = await prisma.automatisation.create({
      data: {
        name,
        repoUrl,
        hour,
        jobName,
        token,
        description,
      },
    })

    return NextResponse.json(newAutomatisation, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la création de l\'automatisation:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'automatisation' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

