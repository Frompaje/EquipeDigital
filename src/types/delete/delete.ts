import { z } from 'zod'

export const deleteUserSchema = z.object({
  id: z.string(),
})

export type DeleteUserSchema = z.infer<typeof deleteUserSchema>
