import { HeaderNav } from '@/commons/components/header-nav/header-nav'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable } from 'react-native'
import { Heading, View } from 'tamagui'

export type MagisterLoginHeaderNavProps = {
  onBack: Action
}

export function MagisterLoginHeaderNav({
  onBack,
}: MagisterLoginHeaderNavProps) {
  return (
    <HeaderNav>
      <HeaderNav.Left>
        <Pressable onPress={onBack}>
          <FontAwesome name="arrow-left" size={24} />
        </Pressable>
      </HeaderNav.Left>
      <HeaderNav.Middle>
        <Heading fontWeight="bold" text="center">
          {t(
            'recruitment-magister-login.components.MagisterLoginHeaderNav.title',
          )}
        </Heading>
      </HeaderNav.Middle>
      <HeaderNav.Right>
        <View width={24} height={24} />
      </HeaderNav.Right>
    </HeaderNav>
  )
}
