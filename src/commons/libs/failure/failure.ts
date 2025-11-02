export function failure(
  name: string,
  message: string,
  errorOptions?: ErrorOptions,
) {
  class Failure extends Error {
    constructor() {
      super(message, errorOptions)

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor)
      }

      this.name = name
    }
  }

  return new Failure()
}
