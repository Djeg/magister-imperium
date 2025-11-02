import { z } from 'zod'

export const magisterSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
})

export type Magister = z.infer<typeof magisterSchema>
