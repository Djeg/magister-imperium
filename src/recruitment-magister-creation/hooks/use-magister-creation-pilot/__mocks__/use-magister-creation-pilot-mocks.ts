import type { MagisterCreationState } from '@/recruitment-magister-creation/components/magister-creation-screen/magister-creation-screen'
import { observable } from '@legendapp/state'

export const $magisterCreationMock = observable<MagisterCreationState>({
  errors: [],
})

export const handleSignatureMock = jest.fn()
