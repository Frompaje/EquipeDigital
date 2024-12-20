import { UserNotFound } from '@/error/userNotFound'
import { prisma } from '@/lib/prisma'
import { deleteUserSchema } from '@/types/delete/delete'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function DELETE(req: Request) {
  try {
    const body = await req.json()

    const { id } = deleteUserSchema.parse(body)

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    })

    if (!user) {
      throw new UserNotFound()
    }

    await prisma.user.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(
      { message: 'Usuário deletado com sucesso!' },
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
    console.log(error)
    return NextResponse.json({ message: 'Erro desconhecido' }, { status: 500 })
  }
}
