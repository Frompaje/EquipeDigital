import { z } from 'zod'

export const updateInfoSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1).nullable(),
  password: z.string().min(6).nullable(),
  name: z.string().min(3).max(30).nullable(),
})

export const updateInfoResolve = z.object({
  email: z.string().email().min(1).nullable(),
  password: z.string().min(6).nullable(),
  name: z.string().min(3).max(30).nullable(),
})

export type UpdateInfoSchema = z.infer<typeof updateInfoSchema>
export type UpdateInfoResolve = z.infer<typeof updateInfoResolve>
