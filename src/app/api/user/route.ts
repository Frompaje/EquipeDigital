import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const listUser = await prisma.user.findMany()

    return NextResponse.json({ response: listUser }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Erro desconhecido' }, { status: 500 })
  }
}
