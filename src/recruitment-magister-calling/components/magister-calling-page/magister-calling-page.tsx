import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import { StatusBar } from 'react-native'
import { Heading, Image, styled, Text, View, YStack } from 'tamagui'

export type MagisterCallingPageProps = {
  onSign: Action
  onJoin: Action
}

export function MagisterCallingPage({
  onSign,
  onJoin,
}: MagisterCallingPageProps) {
  return (
    <PageFrame>
      <StatusBar barStyle="dark-content" />
      <Background.CoverImage
        source={require('@/recruitment-magister-calling/assets/images/city-background.jpeg')}
      />
      <PageFrame.Centered withHorizontalPadding>
        <View flex={1} justify="center" items="center">
          <View items="center">
            <Image
              source={require('@/recruitment-magister-calling/assets/images/imperium-coat-of-arms.white-shadowed.png')}
              width={167}
              height={251}
            />
          </View>
          <DecoratedFrame>
            <Papyrus>
              <YStack gap="$3" items="center" px="$4">
                <YStack gap="$1">
                  <Heading
                    size="$9"
                    fontWeight={800}
                    color="white"
                    text="center"
                    testID="recruitment-magister-calling.MagisterCallingPage.title"
                  >
                    {t(
                      'recruitment-magister-calling.components.MagisterCallingPage.magister',
                    )}
                  </Heading>
                  <Heading
                    size="$7"
                    fontWeight={800}
                    color="white"
                    text="center"
                  >
                    {t(
                      'recruitment-magister-calling.components.MagisterCallingPage.title',
                    )}
                  </Heading>
                </YStack>
                <Text color="white" text="center">
                  {t(
                    'recruitment-magister-calling.components.MagisterCallingPage.description',
                  )}
                </Text>
              </YStack>
            </Papyrus>
          </DecoratedFrame>
        </View>
        <HButtonStack justify="center" items="center">
          <Button
            frameProps={{ flex: 1 }}
            onPress={onSign}
            testID="recruitment-magister-calling.MagisterCallingPage.btns.sign"
          >
            {t(
              'recruitment-magister-calling.components.MagisterCallingPage.btns.sign',
            )}
          </Button>
          <Button
            frameProps={{ flex: 1 }}
            onPress={onJoin}
            testID="recruitment-magister-calling.MagisterCallingPage.btns.join"
          >
            {t(
              'recruitment-magister-calling.components.MagisterCallingPage.btns.join',
            )}
          </Button>
        </HButtonStack>
      </PageFrame.Centered>
    </PageFrame>
  )
}

const Papyrus = styled(View, {
  bg: 'rgba(0, 0, 0, 0.6)',
  py: '$4',
})

const HButtonStack = styled(YStack, {
  flexDirection: 'row',
  gap: '$4',
})
