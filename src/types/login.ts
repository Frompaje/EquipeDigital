import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(255),
})

export type LoginSchema = z.infer<typeof loginSchema>

export type LoginResponse = {
  expiresIn: string
  acessToken: string
  user: {
    id: string
    name: string
    email: string
    role: string
  }
}
