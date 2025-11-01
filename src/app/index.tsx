import { env } from '@/commons/libs/env/env'
import { MagisterCallingPage } from '@/recruitment/components/magister-calling-page/magister-calling-page'

function Index() {
  return <MagisterCallingPage />
}

function Storybook() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('@/commons/libs/storybook').default()
}

export default env('storybookEnabled') ? Storybook : Index
