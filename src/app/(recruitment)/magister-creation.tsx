import { MagisterCreationPage } from '@/recruitment/components/magister-creation-page/magister-creation-page'
import { useMagisterCreationActor } from '@/recruitment/hooks/use-magister-creation-actor/use-magister-creation-actor'

export default function MagisterCreation() {
  const [_, { createNewMagister }] = useMagisterCreationActor()

  return <MagisterCreationPage onSign={createNewMagister} />
}
