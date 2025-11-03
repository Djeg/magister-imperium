import {
  type AuthSubscriptionPayload,
  authSubscription,
} from '@/commons/subscriptions/auth-subscription/auth-subscription'
import { useEffect } from 'react'
import { useSupabase } from '../use-supabase/use-supabase'

export function useAuthSubscription({
  onLogin,
  onLogout,
}: AuthSubscriptionPayload) {
  const supabase = useSupabase()

  useEffect(() => {
    return authSubscription({ supabase, onLogin, onLogout })
  }, [supabase, onLogin, onLogout])
}
