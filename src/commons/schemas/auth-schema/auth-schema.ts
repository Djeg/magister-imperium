import { Failure } from '@/commons/libs/failure/failure'
import { magisterSchema } from '@/commons/schemas/magister-schema/magister-schema'
import { z } from 'zod'

export const authSchema = z.object({
  authenticated: z.boolean(),
  magister: magisterSchema.optional(),
  failure: z.instanceof(Failure).optional(),
})

export type Auth = z.infer<typeof authSchema>
