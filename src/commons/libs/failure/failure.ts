class Failure extends Error {
  constructor(name: string, message: string, errorOptions?: ErrorOptions) {
    super(message, errorOptions)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.name = name
    this.message = message
  }
}

function named(name: string) {
  return class NamedFailure extends Failure {
    constructor(message: string, errorOptions?: ErrorOptions) {
      super(name, message, errorOptions)

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor)
      }

      this.name = name
      this.message = message
    }
  }
}

export function failure(
  Failure: new (message: string, errorOptions?: ErrorOptions) => Failure,
  message: string,
  errorOptions?: ErrorOptions,
): never {
  throw new Failure(message, errorOptions)
}

failure.named = named
