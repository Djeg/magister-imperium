import { renderWithProviders } from '@/commons/libs/testing/render-with-provider'
import type { TranslationKey } from '@/commons/libs/translations/translations'
import {
  $magisterLoginMock,
  handleLoginMock,
} from '@/recruitment-magister-login/hooks/use-magister-login-pilot/__mocks__/use-magister-login-pilot-mocks'
import { act, fireEventAsync } from '@testing-library/react-native'
import { MagisterLoginScreen } from './magister-login-screen'

jest.mock(
  '@/recruitment-magister-login/hooks/use-magister-login-pilot/use-magister-login-pilot',
)

describe('MagisterLoginScreen', () => {
  it('should render the page successfully', async () => {
    const { getByTestId } = await renderWithProviders(<MagisterLoginScreen />)

    const title = await act(() =>
      getByTestId('recruitment-magister-login.MagisterLoginPage.title'),
    )

    expect(title).toBeTruthy()
  })

  it('should show the errors when they are present', async () => {
    $magisterLoginMock.errors.set([
      {
        id: 'error' as TranslationKey,
      },
    ])

    const { getByTestId } = await renderWithProviders(<MagisterLoginScreen />)

    const error = await act(() => getByTestId('error'))

    expect(error).toBeTruthy()
  })

  it('should submit the form successfully', async () => {
    const { getByTestId } = await renderWithProviders(<MagisterLoginScreen />)

    const emailInput = await act(() =>
      getByTestId('recruitment-magister-login.MagisterLoginPage.email'),
    )
    const passwordInput = await act(() =>
      getByTestId('recruitment-magister-login.MagisterLoginPage.password'),
    )
    const submitButton = await act(() =>
      getByTestId('recruitment-magister-login.MagisterLoginPage.btns.login'),
    )

    await act(() => fireEventAsync.changeText(emailInput, 'test@example.com'))
    await act(() => fireEventAsync.changeText(passwordInput, 'Password123!'))

    await act(() => fireEventAsync.press(submitButton))

    expect(handleLoginMock).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'Password123!',
    })
  })
})
