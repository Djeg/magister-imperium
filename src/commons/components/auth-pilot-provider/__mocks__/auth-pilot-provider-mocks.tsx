import type { AuthState } from '@/commons/hooks/use-auth-pilot/use-auth-pilot'
import type { Failure } from '@/commons/libs/failure/failure'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import { observable, opaqueObject } from '@legendapp/state'

export const authPilotMock = {
  $: observable<AuthState>({
    magister: undefined,
    lastFailure: undefined,
  }),
  login: jest.fn().mockImplementation((magister: Magister) => {
    authPilotMock.$.lastFailure.set(undefined)
    authPilotMock.$.magister.set(magister)
  }),
  logout: jest.fn().mockImplementation(() => {
    authPilotMock.$.lastFailure.set(undefined)
    authPilotMock.$.magister.set(undefined)
  }),
  fail: jest.fn().mockImplementation((failure: Failure) => {
    authPilotMock.$.lastFailure.set(opaqueObject(failure))
  }),
}
