import { HeaderNav } from '@/commons/components/header-nav/header-nav'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Pressable } from 'react-native'
import { Heading, View } from 'tamagui'

export type MagisterCreationHeaderNavProps = {
  onBack: Action
}

export function MagisterCreationHeaderNav({
  onBack,
}: MagisterCreationHeaderNavProps) {
  return (
    <HeaderNav>
      <HeaderNav.Left>
        <View width={24} height={24} />
      </HeaderNav.Left>
      <HeaderNav.Middle>
        <Heading fontWeight="bold" text="center">
          {t(
            'recruitment-magister-creation.components.MagisterCreationHeaderNav.title',
          )}
        </Heading>
      </HeaderNav.Middle>
      <HeaderNav.Right>
        <Pressable onPress={onBack}>
          <FontAwesome name="arrow-right" size={24} />
        </Pressable>
      </HeaderNav.Right>
    </HeaderNav>
  )
}
