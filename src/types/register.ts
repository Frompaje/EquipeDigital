import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(3).max(255),
  repeatPassword: z.string().min(3).max(255),
})

export type RegisterSchema = z.infer<typeof registerSchema>
