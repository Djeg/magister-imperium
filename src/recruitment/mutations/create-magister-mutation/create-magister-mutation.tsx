import type { SourcesPayload } from '@/commons/components/sources-provider/sources-provider'
import type { Action } from '@/commons/libs/react/react.action'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import {
  type NewMagisterInput,
  newMagisterSchema,
} from '@/recruitment/schemas/new-magister-schema/new-magister-schema'

export type CreateMagisterMutationPayload = {
  newMagister: NewMagisterInput
  onSuccess: Action<Magister>
}

export async function createMagisterMutation({
  sources,
  newMagister,
  onSuccess,
}: SourcesPayload<CreateMagisterMutationPayload>) {
  const validNewMagister = newMagisterSchema.parse(newMagister)
  const magister = await sources.recruitment.createMagister(validNewMagister)

  await Promise.resolve(onSuccess(magister))

  return magister
}
