import { z } from 'zod'

export const updateEmailSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1),
})

export const updateNameSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1),
  name: z.string().min(3).max(30),
})

export const updatePassowrdSchema = z.object({
  id: z.string(),
  password: z.string().min(6).max(255),
  repeatPassword: z.string().min(6).max(255),
})

export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>
export type UpdatePassowrdSchema = z.infer<typeof updatePassowrdSchema>
export type UpdateNameSchema = z.infer<typeof updateNameSchema>
