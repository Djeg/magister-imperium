import { Failure, failure } from '@/commons/libs/failure/failure'

describe('failure', () => {
  it('should create a named failure', () => {
    class TestFailure extends failure.named('test name') {}

    const someFailure = new TestFailure('test message')

    expect(someFailure instanceof Failure).toBe(true)
    expect(someFailure.name).toBe('test name')
    expect(someFailure instanceof Error).toBe(true)
    expect(someFailure.message).toBe('test message')
  })

  it('should accept a cause', () => {
    class TestFailure extends failure.named('test name') {}
    const cause = new Error('test cause')

    const someFailure = new TestFailure('test message', {
      cause,
    })

    expect(someFailure.cause).toBeInstanceOf(Error)
    expect(someFailure.cause).toBe(cause)
  })
})
