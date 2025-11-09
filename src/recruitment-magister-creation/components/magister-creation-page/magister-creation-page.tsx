import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { FormField } from '@/commons/components/form-field/form-field'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { type Translatable, t } from '@/commons/libs/translations/translations'
import { useMagisterCreationForm } from '@/recruitment-magister-creation/hooks/use-magister-creation-form/use-magister-creation-form'
import type { NewMagister } from '@/recruitment-magister-creation/schemas/new-magister-schema/new-magister-schema'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { type Observable, observable } from '@legendapp/state'
import { Computed } from '@legendapp/state/react'
import { StatusBar } from 'react-native'
import { Heading, ScrollView, Text, YStack } from 'tamagui'

export type MagisterCreationPageProps = {
  onSign: Action<NewMagister>
  $errors?: Observable<Translatable[]>
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
        source={require('@/recruitment-magister-creation/assets/images/magister-creation.jpeg')}
      />
      <PageFrame.Centered withHorizontalPadding>
        <ScrollView contentContainerStyle={{ flex: 1, justify: 'center' }}>
          <DecoratedFrame>
            <Background.ColorOverlay
              filter="none"
              bg="rgba(255, 255, 255, 0.8)"
            />
            <YStack gap="$2" px="$2" py="$4">
              <Heading
                text="center"
                fontWeight="bold"
                testID="recruitmentMagisterCreation.MagisterCreationPage.title"
              >
                {t(
                  'recruitment-magister-creation.components.MagisterCreationPage.title',
                )}
              </Heading>
              <Text text="center">
                {t(
                  'recruitment-magister-creation.components.MagisterCreationPage.description',
                )}
              </Text>
              <Computed>
                {() =>
                  $errors.get().length ? (
                    <FormField.ErrorList>
                      {$errors.get().map(error => (
                        <FormField.ErrorMessage
                          key={error.id}
                          text="center"
                          testID={error.id}
                        >
                          {t(error.id, error.values)}
                        </FormField.ErrorMessage>
                      ))}
                    </FormField.ErrorList>
                  ) : null
                }
              </Computed>
              <Field name="name">
                {field => (
                  <FormField
                    label={t(
                      'recruitment-magister-creation.components.MagisterCreationPage.name.label',
                    )}
                  >
                    <FormField.Input
                      testID="recruitmentMagisterCreation.MagisterCreationPage.name"
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment-magister-creation.components.MagisterCreationPage.name.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="email">
                {field => (
                  <FormField
                    label={t(
                      'recruitment-magister-creation.components.MagisterCreationPage.email.label',
                    )}
                    errors={field.state.meta.errors.map(
                      error => error?.message ?? '',
                    )}
                  >
                    <FormField.Input
                      testID="recruitmentMagisterCreation.MagisterCreationPage.email"
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment-magister-creation.components.MagisterCreationPage.email.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="password">
                {field => (
                  <FormField
                    label={t(
                      'recruitment-magister-creation.components.MagisterCreationPage.password.label',
                    )}
                    errors={field.state.meta.errors.map(
                      error => error?.message ?? '',
                    )}
                  >
                    <FormField.Input
                      testID="recruitmentMagisterCreation.MagisterCreationPage.password"
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholder={t(
                        'recruitment-magister-creation.components.MagisterCreationPage.password.placeholder',
                      )}
                    />
                  </FormField>
                )}
              </Field>
              <Field name="confirmPassword">
                {field => (
                  <FormField
                    label={t(
                      'recruitment-magister-creation.components.MagisterCreationPage.confirmPassword.label',
                    )}
                    errors={field.state.meta.errors.map(
                      error => error?.message ?? '',
                    )}
                  >
                    <FormField.Input
                      testID="recruitmentMagisterCreation.MagisterCreationPage.confirmPassword"
                      errored={field.state.meta.errors.length > 0}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      placeholder={t(
                        'recruitment-magister-creation.components.MagisterCreationPage.confirmPassword.placeholder',
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
              <Button
                stretch
                onPress={handleSubmit}
                disabled={!canSubmit}
                testID="recruitmentMagisterCreation.MagisterCreationPage.btns.submit"
              >
                {isSubmitting ? (
                  <Button.Label>
                    {t(
                      'recruitment-magister-creation.components.MagisterCreationPage.btns.submitting',
                    )}
                  </Button.Label>
                ) : (
                  <Button.Group>
                    <FontAwesome name="pencil" size={14} color="black" />
                    <Button.Label>
                      {t(
                        'recruitment-magister-creation.components.MagisterCreationPage.btns.sign',
                      )}
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
