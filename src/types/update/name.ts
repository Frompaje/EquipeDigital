import { z } from 'zod'

export const updateNameSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(30),
})

export const updateNameResolve = z.object({
  name: z.string().min(3).max(30),
})

export type UpdateNameSchema = z.infer<typeof updateNameSchema>
export type UpdateNameResolve = z.infer<typeof updateNameResolve>
