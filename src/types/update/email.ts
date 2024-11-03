import { z } from 'zod'

export const updateEmailSchema = z.object({
  id: z.string(),
  newEmail: z.string().email().min(1),
  oldEmail: z.string().email().min(1),
})

export const updateEmailResolve = z.object({
  newEmail: z.string().email().min(1),
})

export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>
export type UpdateEmailResolve = z.infer<typeof updateEmailResolve>
