import { MagisterCreationPage } from '@/recruitment/components/magister-creation-page/magister-creation-page'
import { useMagisterCreationStore } from '@/recruitment/hooks/use-magister-creation-store/use-magister-creation-store'

export function MagisterCreationScreen() {
  const [$, { createNewMagister }] = useMagisterCreationStore()

  return <MagisterCreationPage onSign={createNewMagister} $errors={$.errors} />
}
