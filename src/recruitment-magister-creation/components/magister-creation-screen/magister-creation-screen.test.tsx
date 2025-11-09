import { renderWithProviders } from '@/commons/libs/testing/render-with-provider'
import {
  $magisterCreationMock,
  handleSignatureMock,
} from '@/recruitment-magister-creation/hooks/use-magister-creation-pilot/__mocks__/use-magister-creation-pilot-mocks'
import { act, fireEventAsync } from '@testing-library/react-native'
import { MagisterCreationScreen } from './magister-creation-screen'

jest.mock(
  '@/recruitment-magister-creation/hooks/use-magister-creation-pilot/use-magister-creation-pilot',
)

describe('MagisterCreationScreen', () => {
  it('should render the page successfully', async () => {
    const { queryByTestId } = await renderWithProviders(
      <MagisterCreationScreen />,
    )

    const title = await act(() =>
      queryByTestId('recruitmentMagisterCreation.MagisterCreationPage.title'),
    )

    expect(title).toBeTruthy()
  })

  it('should show the errors when they are present', async () => {
    $magisterCreationMock.errors.set([
      {
        id: 'recruitment-magister-creation.components.MagisterCreationScreen.signatureError',
        values: {},
      },
    ])

    const { queryByTestId } = await renderWithProviders(
      <MagisterCreationScreen />,
    )

    const error = await act(() =>
      queryByTestId(
        'recruitment-magister-creation.components.MagisterCreationScreen.signatureError',
      ),
    )

    expect(error).toBeTruthy()
  })

  it('should call the handleSignature function when the form is submitted', async () => {
    const { getByTestId } = await renderWithProviders(
      <MagisterCreationScreen />,
    )

    const nameInput = getByTestId(
      'recruitmentMagisterCreation.MagisterCreationPage.name',
    )
    const emailInput = getByTestId(
      'recruitmentMagisterCreation.MagisterCreationPage.email',
    )
    const passwordInput = getByTestId(
      'recruitmentMagisterCreation.MagisterCreationPage.password',
    )
    const confirmPasswordInput = getByTestId(
      'recruitmentMagisterCreation.MagisterCreationPage.confirmPassword',
    )
    const submitButton = getByTestId(
      'recruitmentMagisterCreation.MagisterCreationPage.btns.submit',
    )

    await act(() => fireEventAsync.changeText(nameInput, 'John Doe'))

    await act(() =>
      fireEventAsync.changeText(emailInput, 'john.doe@example.com'),
    )

    await act(() => fireEventAsync.changeText(passwordInput, 'Password123!'))

    await act(() =>
      fireEventAsync.changeText(confirmPasswordInput, 'Password123!'),
    )

    await act(() => fireEventAsync.press(submitButton))

    expect(handleSignatureMock).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    })
  })
})
