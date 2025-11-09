import {
  $magisterCreationMock,
  handleSignatureMock,
} from '@/recruitment-magister-creation/hooks/use-magister-creation-pilot/__mocks__/use-magister-creation-pilot-mocks'

export function useMagisterCreationPilot() {
  return {
    $: $magisterCreationMock,
    handleSignature: handleSignatureMock,
  }
}
