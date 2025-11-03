import type { Action } from '@/commons/libs/react/react.action'
import type { SupabasePayload } from '@/commons/libs/supabase/supabase'
import { magisterQuery } from '@/commons/queries/magister-query/magister-query'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'

export type AuthSubscriptionPayload = {
  onLogin: Action<Magister>
  onLogout: Action<void>
}

export function authSubscription({
  supabase,
  onLogin,
  onLogout,
}: SupabasePayload<AuthSubscriptionPayload>) {
  const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (!session) return

    if (event === 'SIGNED_IN') {
      const magister = await magisterQuery({
        supabase,
        userId: session.user.id,
      })

      onLogin(magister)

      return
    }

    if (event === 'SIGNED_OUT') {
      onLogout()

      return
    }

    return null
  })

  return () => {
    data.subscription.unsubscribe()
  }
}
