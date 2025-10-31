import { once } from '@/commons/libs/fns/once'

test('should call a function only once', () => {
  const fn = jest.fn()
  const onceFn = once(fn)

  onceFn()
  onceFn()
  onceFn()
  onceFn()
  onceFn()

  expect(fn).toHaveBeenCalledTimes(1)
})
