import { renderWithProviders } from '@/commons/libs/testing/render-with-provider'
import { MagisterCallingScreen } from '@/recruitment-magister-calling/components/magister-calling-screen/magister-calling-screen'
import { act, fireEventAsync } from '@testing-library/react-native'
import { expoRouterMock } from '../../../../__mocks__/expo-router-mock'

describe('MagisterCallingScreen', () => {
  it('should render the page successfully', async () => {
    const { getByTestId } = await renderWithProviders(<MagisterCallingScreen />)

    const title = await act(() =>
      getByTestId('recruitment-magister-calling.MagisterCallingPage.title'),
    )

    expect(title).toBeTruthy()
  })

  it('should call the onSign function when the sign button is pressed', async () => {
    const { getByTestId } = await renderWithProviders(<MagisterCallingScreen />)

    const signButton = await act(() =>
      getByTestId('recruitment-magister-calling.MagisterCallingPage.btns.sign'),
    )

    await act(() => fireEventAsync.press(signButton))

    expect(expoRouterMock.push).toHaveBeenCalledWith('/magister-creation')
  })

  it('should call the onJoin function when the join button is pressed', async () => {
    const { getByTestId } = await renderWithProviders(<MagisterCallingScreen />)

    const joinButton = await act(() =>
      getByTestId('recruitment-magister-calling.MagisterCallingPage.btns.join'),
    )

    await act(() => fireEventAsync.press(joinButton))

    expect(expoRouterMock.push).toHaveBeenCalledWith('/magister-login')
  })
})
