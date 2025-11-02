import { BackgroundCoverImage } from '@/commons/components/background-cover-image/background-cover-image'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import { t } from '@/commons/libs/translations/translations'
import { Heading, Image, styled, Text, View, YStack } from 'tamagui'

export function MagisterCallingPage() {
  return (
    <PageFrame>
      <BackgroundCoverImage
        source={require('@/assets/images/city-background.jpeg')}
        filter="none"
      />
      <PageFrame.Centered withHorizontalPadding>
        <View flex={1} justify="center" items="center">
          <View items="center">
            <Image
              source={require('@/assets/images/imperium-coat-of-arms.white-shadowed.png')}
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
          </DecoratedFrame>
        </View>
        <HButtonStack justify="center" items="center">
          <Button frameProps={{ flex: 1 }}>
            {t('recruitment.MagisterCallingPage.btns.sign')}
          </Button>
          <Button frameProps={{ flex: 1 }}>
            {t('recruitment.MagisterCallingPage.btns.join')}
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
