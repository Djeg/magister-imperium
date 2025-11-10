import { renderWithProviders } from '@/commons/libs/testing/render-with-provider'
import { useContext } from 'react'
import { Text } from 'tamagui'
import { AuthPilotContext, AuthPilotProvider } from './auth-pilot-provider'

describe('AuthPilotProvider', () => {
  it('should render the children and provider the auth pilot', async () => {
    function TestComponent() {
      const authPilot = useContext(AuthPilotContext)

      if (!authPilot) {
        throw new Error('Auth pilot not found')
      }

      return <Text>Hello</Text>
    }

    const { getByText } = await renderWithProviders(
      <AuthPilotProvider>
        <TestComponent />
      </AuthPilotProvider>,
    )

    expect(getByText('Hello')).toBeTruthy()
  })
})
