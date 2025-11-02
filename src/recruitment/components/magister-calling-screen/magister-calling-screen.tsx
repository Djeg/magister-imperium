import { MagisterCallingPage } from '@/recruitment/components/magister-calling-page/magister-calling-page'
import { router } from 'expo-router'

export function MagisterCallingScreen() {
  const handleSign = () => {
    router.push('/magister-creation')
  }

  const handleJoin = () => {
    router.push('/magister-login')
  }

  return <MagisterCallingPage onSign={handleSign} onJoin={handleJoin} />
}
