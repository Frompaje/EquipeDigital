import { loginSchema } from '@/types/schema/login'
import { compare } from 'bcrypt'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, password } = loginSchema.parse(body)

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (!user) {
      throw new Error('Credenciais inválidas')
    }

    const isSamePassword = await compare(password, user.password)

    if (!isSamePassword) {
      throw new Error('Credenciais inválidas')
    }

    const acessToken = jwt.sign(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      'SECRET',
      { expiresIn: '1h' },
    )

    return NextResponse.json(acessToken, { status: 200 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 500 },
    )
  }
}
