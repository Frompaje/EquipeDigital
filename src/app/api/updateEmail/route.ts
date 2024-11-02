import { InvalidCredential } from '@/error/InvalidCredential'
import { UserNotFound } from '@/error/userNotFound'
import { prisma } from '@/lib/prisma'
import { updateEmailSchema } from '@/types/schema/update'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { oldEmail, newEmail, id } = updateEmailSchema.parse(body)

    if (oldEmail === newEmail) {
      throw new InvalidCredential()
    }

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        email: newEmail,
      },
    })

    return NextResponse.json(
      { message: 'Usuário atualizado com sucesso!' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    if (error instanceof UserNotFound) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ message: 'Erro desconhecido' }, { status: 500 })
  }
}
