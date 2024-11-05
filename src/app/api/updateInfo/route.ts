import { InvalidCredential } from '@/error/InvalidCredential'
import { UserNotFound } from '@/error/userNotFound'
import { prisma } from '@/lib/prisma'
import { updateInfoSchema } from '@/types/update/info'
import { compare, hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { id, email, name, password } = updateInfoSchema.parse(body)

    const user = await prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new UserNotFound()
    }

    let passwordHashed = user.password

    if (password) {
      const passwordMatched = await compare(password, user.password)

      if (passwordMatched) {
        throw new InvalidCredential()
      }

      passwordHashed = await hash(password, 10)
    }

    await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password: passwordHashed,
      },
    })

    return NextResponse.json(
      { message: 'Usuário atualizado com sucesso!' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 })
    }

    if (error instanceof UserNotFound) {
      return NextResponse.json({ error: error.message }, { status: 404 })
    }
    console.log(error)
    return NextResponse.json({ message: 'Erro desconhecido' }, { status: 500 })
  }
}
