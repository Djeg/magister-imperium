import { t } from '@/commons/libs/translations/translations'
import type { ComponentProps, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Heading, Image, styled, Text, View, YStack } from 'tamagui'

export function MagisterCallingPage() {
  return (
    <View flex={1}>
      <View position="absolute" t={0} l={0} r={0} b={0} z={-10}>
        <Image
          source={require('@/assets/images/city-background.jpeg')}
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <BlackFrame />
      </View>
      <PageFrame>
        <PageFrame.Centered px="$4">
          <View items="center">
            <Image
              source={require('@/assets/images/imperium-coat-of-arms.white-shadowed.png')}
              width={167}
              height={251}
            />
          </View>
          <BtnFrame>
            <Papyrus>
              <YStack gap="$3" items="center" px="$4">
                <YStack gap="$1">
                  <Heading
                    size="$9"
                    fontWeight={800}
                    color="white"
                    text="center"
                  >
                    {t('recruitment.MagisterCallingPage.magister')}
                  </Heading>
                  <Heading
                    size="$7"
                    fontWeight={800}
                    color="white"
                    text="center"
                  >
                    {t('recruitment.MagisterCallingPage.title')}
                  </Heading>
                </YStack>
                <Text color="white" text="center">
                  {t('recruitment.MagisterCallingPage.description')}
                </Text>
              </YStack>
            </Papyrus>
          </BtnFrame>
        </PageFrame.Centered>
        <HBtnStack p="$4" justify="center" items="center">
          <BtnFrame flex={1}>
            <Btn>{t('recruitment.MagisterCallingPage.btns.sign')}</Btn>
          </BtnFrame>
          <BtnFrame flex={1}>
            <Btn>{t('recruitment.MagisterCallingPage.btns.join')}</Btn>
          </BtnFrame>
        </HBtnStack>
      </PageFrame>
    </View>
  )
}

export type PageFrameProps = {
  children: ReactNode
}

function PageFrame({ children }: PageFrameProps) {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
}

const CenteredFrame = styled(View, {
  flex: 1,
  justify: 'center',
  items: 'center',
})

const VerticalFrame = styled(View, {
  flex: 1,
})

PageFrame.Centered = CenteredFrame
PageFrame.Vertical = VerticalFrame

const BlackFrame = styled(View, {
  bg: 'black',
  opacity: 0.2,
  position: 'absolute',
  backdropFilter: 'blur(10px)',
  t: 0,
  l: 0,
  r: 0,
  b: 0,
})

export function BtnFrame({ children, ...props }: ComponentProps<typeof View>) {
  return (
    <View position="relative" p={6} {...props}>
      {children}
      <View position="absolute" t={0} l={0} r={0} b={0}>
        <Image
          position="absolute"
          t={0}
          l={0}
          width={6}
          height="100%"
          z={-10}
          source={require('@/assets/images/button-frame.left.png')}
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          r={0}
          z={-10}
          source={require('@/assets/images/button-frame.right.png')}
          width={6}
          height="100%"
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          z={-10}
          source={require('@/assets/images/button-frame.top.png')}
          width="100%"
          height={6}
          resizeMode="stretch"
        />
        <Image
          position="absolute"
          b={0}
          z={-10}
          source={require('@/assets/images/button-frame.bottom.png')}
          width="100%"
          height={6}
          resizeMode="stretch"
        />
      </View>
    </View>
  )
}

const Btn = styled(Button, {
  fontWeight: 'bold',
  rounded: 0,
})

const Papyrus = styled(View, {
  bg: 'rgba(0, 0, 0, 0.6)',
  py: '$4',
})

const HBtnStack = styled(YStack, {
  flexDirection: 'row',
  gap: '$4',
})
