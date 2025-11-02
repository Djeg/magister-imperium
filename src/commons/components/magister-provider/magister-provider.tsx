import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import {
  type Magister,
  magisterSchema,
} from '@/commons/schemas/magister-schema/magister-schema'
import { createContext, type ReactNode, useEffect, useState } from 'react'

export const MagisterContext = createContext<Magister | null>(null)

export type MagisterProviderProps = {
  children: ReactNode
}

export function MagisterProvider({ children }: MagisterProviderProps) {
  const [magister, setMagister] = useState<Magister | null>(null)
  const supabase = useSupabase()

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session?.user.id) {
        setMagister(null)

        return
      }

      if (event === 'SIGNED_IN') {
        const { data: magisterData, error: magisterError } = await supabase
          .from('magisters')
          .select('id, userId, name')
          .eq('userId', session.user.id)
          .single()

        if (magisterError || !magisterData) {
          setMagister(null)

          return
        }

        const magister = magisterSchema.parse(magisterData)

        console.log('Connected magister:', magister)

        setMagister(magister)

        return
      }

      if (event === 'SIGNED_OUT') {
        setMagister(null)

        return
      }
    })

    return () => data.subscription.unsubscribe()
  }, [supabase])

  return (
    <MagisterContext.Provider value={magister}>
      {children}
    </MagisterContext.Provider>
  )
}
