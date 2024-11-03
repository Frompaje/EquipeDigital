import { InvalidCredential } from '@/error/InvalidCredential'
import { UserNotFound } from '@/error/userNotFound'
import { prisma } from '@/lib/prisma'
import { updatePasswordSchema } from '@/types/update/password'
import { compare, hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const { repeatPassword, password, id } = updatePasswordSchema.parse(body)

    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    })

    if (!user) {
      throw new UserNotFound()
    }

    const passwordMatched = await compare(password, user?.password)

    if (passwordMatched || repeatPassword !== password) {
      throw new InvalidCredential()
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
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
