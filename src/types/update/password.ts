import { z } from 'zod'

export const updatePasswordSchema = z.object({
  id: z.string(),
  password: z.string().min(6),
  repeatPassword: z.string().min(6),
})

export const updatePasswordResolve = z.object({
  password: z.string().min(6),
  repeatPassword: z.string().min(6),
})

export type UpdatePasswordSchema = z.infer<typeof updatePasswordSchema>
export type UpdatePasswordResolve = z.infer<typeof updatePasswordResolve>
