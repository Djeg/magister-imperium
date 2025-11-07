import { env } from '@/commons/libs/env/env'
import { MagisterCallingScreen } from '@/recruitment-magister-calling/components/magister-calling-screen/magister-calling-screen'

function Storybook() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('@/commons/libs/storybook').default()
}

export default env('storybookEnabled') ? Storybook : MagisterCallingScreen
