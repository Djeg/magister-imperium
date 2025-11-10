import { AuthSubscriptionFailure } from '@/commons/failures/auth-subscription-failure'
import { useFetchMagisterQuery } from '@/commons/hooks/use-fetch-magister-query/use-fetch-magister-query'
import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import type { Action } from '@/commons/libs/react/react.action'
import type { Magister } from '@/commons/schemas/magister-schema/magister-schema'
import { useEffect } from 'react'

export type AuthSubscriptionPayload = {
  onLogin: Action<Magister>
  onFailure: Action<AuthSubscriptionFailure>
  onLogout: Action<void>
}

export function useAuthSubscription({
  onLogin,
  onFailure,
  onLogout,
}: AuthSubscriptionPayload) {
  const supabase = useSupabase()
  const fetchMagister = useFetchMagisterQuery()

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) return

      if (event === 'SIGNED_IN') {
        try {
          const magister = await fetchMagister(session.user.id)

          onLogin(magister)
        } catch (error) {
          onFailure(
            new AuthSubscriptionFailure('Failed to fetch the magister', {
              cause: error,
            }),
          )
        }

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
  }, [supabase, fetchMagister, onLogin, onLogout, onFailure])
}
