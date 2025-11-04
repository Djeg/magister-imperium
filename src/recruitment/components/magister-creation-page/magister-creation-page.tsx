import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { FormField } from '@/commons/components/form-field/form-field'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import { useMagisterCreationForm } from '@/recruitment/hooks/use-magister-creation-form/use-magister-creation-form'
import type { NewMagister } from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { type Observable, observable } from '@legendapp/state'
import { Computed } from '@legendapp/state/react'
import { StatusBar } from 'react-native'
import { Heading, ScrollView, Text, YStack } from 'tamagui'

export type MagisterCreationPageProps = {
  onSign: Action<NewMagister>
  $errors?: Observable<string[]>
}

export function MagisterCreationPage({
  onSign,
  $errors = observable([]),
}: MagisterCreationPageProps) {
  const { Field, Subscribe, handleSubmit } = useMagisterCreationForm({ onSign })

  return (
    <PageFrame edges={['bottom']}>
      <StatusBar barStyle="dark-content" />
      <Background.CoverImage
        source={require('@/assets/images/magister-creation.jpeg')}
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
                {t('recruitment.MagisterCreationPage.title')}
              </Heading>
              <Text text="center">
                {t('recruitment.MagisterCreationPage.description')}
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
              <Field name="name">
                {field => (
                  <FormField
                    label={t('recruitment.MagisterCreationPage.name.label')}
                  >
                    <FormField.Input
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment.MagisterCreationPage.name.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="email">
                {field => (
                  <FormField
                    label={t('recruitment.MagisterCreationPage.email.label')}
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
                      placeholder={t(
                        'recruitment.MagisterCreationPage.email.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="password">
                {field => (
                  <FormField
                    label={t('recruitment.MagisterCreationPage.password.label')}
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
                        'recruitment.MagisterCreationPage.password.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="confirmPassword">
                {field => (
                  <FormField
                    label={t(
                      'recruitment.MagisterCreationPage.confirmPassword.label',
                    )}
                    errors={field.state.meta.errors.map(
                      error => error?.message ?? '',
                    )}
                  >
                    <FormField.Input
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      placeholder={t(
                        'recruitment.MagisterCreationPage.confirmPassword.placeholder',
                      )}
                      autoCapitalize="none"
                      secureTextEntry
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
                    {t('recruitment.MagisterCreationPage.btns.submitting')}
                  </Button.Label>
                ) : (
                  <Button.Group>
                    <FontAwesome name="pencil" size={14} color="black" />
                    <Button.Label>
                      {t('recruitment.MagisterCreationPage.btns.sign')}
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
