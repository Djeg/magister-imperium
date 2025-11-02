import { useMagisterCreationStore } from '@/recruitment/hooks/use-magister-creation-store/use-magister-creation-store'
import { MagisterCreationPage } from '../magister-creation-page/magister-creation-page'

export function MagisterCreationScreen() {
  const [$, { createNewMagister }] = useMagisterCreationStore()

  return <MagisterCreationPage onSign={createNewMagister} $errors={$.errors} />
}
