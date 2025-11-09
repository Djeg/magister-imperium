import { magisterCredentialsSchema } from '@/recruitment-magister-login/schemas/magister-credentials-schema/magister-credentials-schema'

export const magisterCredentialsMock = magisterCredentialsSchema.parse({
  email: 'john.doe@example.com',
  password: 'Password123!',
})
