import { InvalidCredential } from '@/error/InvalidCredential'
import { PasswordNotMatched } from '@/error/passwordNotMatched'
import { prisma } from '@/lib/prisma'
import { registerSchema } from '@/types/register'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, password, repeatPassword } = registerSchema.parse(body)

    if (password !== repeatPassword) {
      throw new InvalidCredential()
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      throw new InvalidCredential()
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'Admin',
      },
    })

    return NextResponse.json(
      { message: 'Usuário criado com sucesso!' },
      { status: 201 },
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

    if (error instanceof PasswordNotMatched) {
      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 400 },
      )
    }

    if (error instanceof InvalidCredential) {
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
