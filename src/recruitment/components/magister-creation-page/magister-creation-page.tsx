import { Background } from '@/commons/components/background/background'
import { Button } from '@/commons/components/button/button'
import { DecoratedFrame } from '@/commons/components/decorated-frame/decorated-frame'
import { FormField } from '@/commons/components/form-field/form-field'
import { PageFrame } from '@/commons/components/page-frame/page-frame'
import type { Action } from '@/commons/libs/react/react.action'
import { t } from '@/commons/libs/translations/translations'
import {
  type NewMagister,
  newMagisterSchema,
} from '@/recruitment/schemas/new-magister-schema/new-magister-schema'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useForm } from '@tanstack/react-form'
import { Heading, ScrollView, Text, YStack } from 'tamagui'

export type MagisterCreationPageProps = {
  onSign: Action<NewMagister>
}

export function MagisterCreationPage({ onSign }: MagisterCreationPageProps) {
  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: newMagisterSchema,
    },
    onSubmit: values => {
      return onSign(newMagisterSchema.parse(values))
    },
  })

  return (
    <PageFrame>
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
              <FormField
                label={t('recruitment.MagisterCreationPage.name.label')}
              >
                <Field name="name">
                  {field => (
                    <FormField.Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment.MagisterCreationPage.name.placeholder',
                      )}
                    />
                  )}
                </Field>
              </FormField>
              <FormField
                label={t('recruitment.MagisterCreationPage.email.label')}
              >
                <Field name="email">
                  {field => (
                    <FormField.Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      placeholder={t(
                        'recruitment.MagisterCreationPage.email.placeholder',
                      )}
                    />
                  )}
                </Field>
              </FormField>
              <FormField
                label={t('recruitment.MagisterCreationPage.password.label')}
              >
                <Field name="password">
                  {field => (
                    <FormField.Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      autoCapitalize="none"
                      secureTextEntry
                      placeholder={t(
                        'recruitment.MagisterCreationPage.password.placeholder',
                      )}
                    />
                  )}
                </Field>
              </FormField>
              <FormField
                label={t(
                  'recruitment.MagisterCreationPage.confirmPassword.label',
                )}
              >
                <Field name="confirmPassword">
                  {field => (
                    <FormField.Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChangeText={field.handleChange}
                      placeholder={t(
                        'recruitment.MagisterCreationPage.confirmPassword.placeholder',
                      )}
                      autoCapitalize="none"
                      secureTextEntry
                    />
                  )}
                </Field>
              </FormField>
            </YStack>
          </DecoratedFrame>
        </ScrollView>
        <Button.Horizontal>
          <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button stretch onPress={handleSubmit} disabled={!canSubmit}>
                {isSubmitting ? (
                  <Text>
                    {t('recruitment.MagisterCreationPage.btns.submitting')}
                  </Text>
                ) : (
                  <Button.Group>
                    <FontAwesome name="pencil" size={14} color="black" />
                    <Text>
                      {t('recruitment.MagisterCreationPage.btns.sign')}
                    </Text>
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
