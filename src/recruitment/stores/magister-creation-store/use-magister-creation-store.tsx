import { useCreateMagisterAction } from '@/recruitment/stores/magister-creation-store/use-create-magister-action'
import { useMagisterCreationState } from '@/recruitment/stores/magister-creation-store/use-magister-creation-state'

export function useMagisterCreationStore() {
  const $ = useMagisterCreationState()

  return {
    $,
    createMagister: useCreateMagisterAction($),
  }
}
