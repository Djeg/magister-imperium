import type { MagisterLoginPilotState } from '@/recruitment-magister-login/hooks/use-magister-login-pilot/use-magister-login-pilot'
import { observable } from '@legendapp/state'

export const $magisterLoginMock = observable<MagisterLoginPilotState>({
  errors: [],
})

export const handleLoginMock = jest.fn()
