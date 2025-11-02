import { useSupabase } from '@/commons/hooks/use-supabase/use-supabase'
import { t } from '@/commons/libs/translations/translations'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import { useObservable } from '@legendapp/state/react'

export type MagisterCreationState = {
  errors: string[]
}

export function useMagisterCreationActor() {
  const supabase = useSupabase()

  const $ = useObservable<MagisterCreationState>({
    errors: [],
  })

  const createNewMagister = async (newMagister: NewMagister) => {
    $.errors.set([])

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: newMagister.email,
        password: newMagister.password,
      },
    )

    if (signUpError || !signUpData.user) {
      $.errors.set([t('recruitment.useMagisterCreationState.errors.signUp')])

      return
    }

    const { data: insertMagisterData, error: insertMagisterError } =
      await supabase
        .from('magisters')
        .insert({
          name: newMagister.name,
        })
        .select('id, name')
        .single()

    if (insertMagisterError || !insertMagisterData) {
      $.errors.set([
        t('recruitment.useMagisterCreationState.errors.insertMagister'),
      ])

      return
    }
  }

  return [$, { createNewMagister }] as const
}
