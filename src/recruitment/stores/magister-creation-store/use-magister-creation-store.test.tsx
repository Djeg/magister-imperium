import { useMagisterCreationStore } from '@/recruitment/stores/magister-creation-store/use-magister-creation-store'
import { renderHook } from '@testing-library/react-native'

describe('useMagisterCreationStore', () => {
  it('should contains the state', () => {
    const { result } = renderHook(() => useMagisterCreationStore())

    expect(result.current.$.get()).toMatchInlineSnapshot()
  })
})
