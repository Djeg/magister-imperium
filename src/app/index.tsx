import { env } from '@/commons/libs/env/env'
import { MagisterCallingPage } from '@/recruitment/components/magister-calling-page/magister-calling-page'
import { router } from 'expo-router'

function Index() {
  const handleSign = () => {
    router.push('/magister-creation')
  }

  const handleJoin = () => {}

  return <MagisterCallingPage onSign={handleSign} onJoin={handleJoin} />
}

function Storybook() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('@/commons/libs/storybook').default()
}

export default env('storybookEnabled') ? Storybook : Index
