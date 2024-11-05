import { z } from 'zod'

export const updateInfoSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1),
  password: z.string().min(6),
  name: z.string().min(3).max(30).optional(),
})

export const updateInfoResolve = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6),
  name: z.string().min(3).max(30),
})

export type UpdateInfoSchema = z.infer<typeof updateInfoSchema>
export type UpdateInfoResolve = z.infer<typeof updateInfoResolve>
