import { prisma } from '@/lib/prisma'
import { registerSchema } from '@/types/register'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, password, repeatPassword } = registerSchema.parse(body)

    if (password !== repeatPassword) {
      throw new Error('As senhas não correspondem')
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      throw new Error('Credenciais inválidas')
    }

    const hashedPassword = await hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'User',
      },
    })

    return NextResponse.json(
      { message: 'Usuário criado com sucesso!' },
      { status: 201 },
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 409 })
  }
}
