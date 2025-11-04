import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { FormField } from '@/commons/components/form-field/form-field'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import { useMagisterLoginForm } from '@/recruitment/hooks/use-magister-login-form/use-magister-login-form'
import type { MagisterCredentials } from '@/recruitment/schemas/magister-credentials-schema/magister-credentials-schema'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { type Observable, observable } from '@legendapp/state'
import { Computed } from '@legendapp/state/react'
import { StatusBar } from 'react-native'
import { Heading, ScrollView, Text, YStack } from 'tamagui'

export type MagisterLoginPageProps = {
  onSubmit: Action<MagisterCredentials>
  $errors?: Observable<string[]>
}

export function MagisterLoginPage({
  onSubmit,
  $errors = observable([]),
}: MagisterLoginPageProps) {
  const { Field, Subscribe, handleSubmit } = useMagisterLoginForm({
    onSubmit,
  })

  return (
    <PageFrame edges={['bottom']}>
      <StatusBar barStyle="dark-content" />
      <Background.CoverImage
        source={require('@/assets/images/magister-login.jpeg')}
      />
      <PageFrame.Centered withHorizontalPadding>
        <ScrollView contentContainerStyle={{ flex: 1, justify: 'center' }}>
          <DecoratedFrame>
            <Background.ColorOverlay
              filter="none"
              bg="rgba(255, 255, 255, 0.8)"
            />
            <YStack gap="$2" px="$2" py="$4">
              <Heading text="center" fontWeight="bold">
                {t('recruitment.MagisterLoginPage.title')}
              </Heading>
              <Text text="center">
                {t('recruitment.MagisterLoginPage.description')}
              </Text>
              <Computed>
                {() =>
                  $errors.get().length ? (
                    <FormField.ErrorList>
                      {$errors.get().map(error => (
                        <FormField.ErrorMessage key={error} text="center">
                          {error}
                        </FormField.ErrorMessage>
                      ))}
                    </FormField.ErrorList>
                  ) : null
                }
              </Computed>
              <Field name="email">
                {field => (
                  <FormField
                    label={t('recruitment.MagisterLoginPage.email.label')}
                  >
                    <FormField.Input
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment.MagisterLoginPage.email.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="password">
                {field => (
                  <FormField
                    label={t('recruitment.MagisterLoginPage.password.label')}
                    errors={field.state.meta.errors.map(
                      error => error?.message ?? '',
                    )}
                  >
                    <FormField.Input
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholder={t(
                        'recruitment.MagisterLoginPage.password.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
            </YStack>
          </DecoratedFrame>
        </ScrollView>
        <Button.Horizontal>
          <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button stretch onPress={handleSubmit} disabled={!canSubmit}>
                {isSubmitting ? (
                  <Button.Label>
                    {t('recruitment.MagisterLoginPage.btns.submitting')}
                  </Button.Label>
                ) : (
                  <Button.Group>
                    <FontAwesome
                      name="connectdevelop"
                      size={14}
                      color="black"
                    />
                    <Button.Label>
                      {t('recruitment.MagisterLoginPage.btns.login')}
                    </Button.Label>
                  </Button.Group>
                )}
              </Button>
            )}
          </Subscribe>
        </Button.Horizontal>
      </PageFrame.Centered>
    </PageFrame>
  )
}
