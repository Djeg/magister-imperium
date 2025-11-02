import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { FormField } from '@/commons/components/form-field/form-field'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Heading, Text, View, YStack } from 'tamagui'

export type MagisterCreationPageProps = {
  onSign: Action
}

export function MagisterCreationPage({ onSign }: MagisterCreationPageProps) {
  return (
    <PageFrame>
      <Background.CoverImage
        source={require('@/assets/images/magister-creation.jpeg')}
      />
      <PageFrame.Centered withHorizontalPadding>
        <View flex={1} justify="center">
          <DecoratedFrame>
            <Background.ColorOverlay
              filter="none"
              bg="rgba(255, 255, 255, 0.8)"
            />
            <YStack gap="$2" px="$2" py="$4">
              <Heading text="center" fontWeight="bold">
                {t('recruitment.MagisterCreationPage.title')}
              </Heading>
              <Text text="center">
                {t('recruitment.MagisterCreationPage.description')}
              </Text>
              <FormField
                label={t('recruitment.MagisterCreationPage.name.label')}
              >
                <FormField.Input
                  autoCapitalize="none"
                  placeholder={t(
                    'recruitment.MagisterCreationPage.name.placeholder',
                  )}
                />
              </FormField>
              <FormField
                label={t('recruitment.MagisterCreationPage.email.label')}
              >
                <FormField.Input
                  autoCapitalize="none"
                  placeholder={t(
                    'recruitment.MagisterCreationPage.email.placeholder',
                  )}
                />
              </FormField>
              <FormField
                label={t('recruitment.MagisterCreationPage.password.label')}
              >
                <FormField.Input
                  autoCapitalize="none"
                  secureTextEntry
                  placeholder={t(
                    'recruitment.MagisterCreationPage.password.placeholder',
                  )}
                />
              </FormField>
              <FormField
                label={t(
                  'recruitment.MagisterCreationPage.confirmPassword.label',
                )}
              >
                <FormField.Input
                  autoCapitalize="none"
                  secureTextEntry
                  placeholder={t(
                    'recruitment.MagisterCreationPage.confirmPassword.placeholder',
                  )}
                />
              </FormField>
            </YStack>
          </DecoratedFrame>
        </View>
        <Button.Horizontal>
          <Button stretch onPress={onSign}>
            <Button.Group>
              <FontAwesome name="pencil" size={14} color="black" />
              <Text>{t('recruitment.MagisterCreationPage.btns.sign')}</Text>
            </Button.Group>
          </Button>
        </Button.Horizontal>
      </PageFrame.Centered>
    </PageFrame>
  )
}
