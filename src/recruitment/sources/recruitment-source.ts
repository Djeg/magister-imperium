import { failure } from '@/commons/libs/failure/failure'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'

export type RecruitmentSource = {
  createMagister: (newMagister: NewMagister) => Promise<Magister>
}

export class RecruitmentSourceFailure extends failure.named(
  'recruitment/sources/recruitment-source',
) {}
