import type { Translatable } from '@/commons/libs/translations/translations'
import { MagisterCreationPage } from '@/recruitment-magister-creation/components/magister-creation-page/magister-creation-page'
import { useMagisterCreationPilot } from '@/recruitment-magister-creation/hooks/use-magister-creation-pilot/use-magister-creation-pilot'

export type MagisterCreationState = {
  errors: Translatable[]
}

export function MagisterCreationScreen() {
  const { $, handleSignature } = useMagisterCreationPilot()

  return <MagisterCreationPage onSign={handleSignature} $errors={$.errors} />
}
