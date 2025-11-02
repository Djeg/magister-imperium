import type { Promisable } from 'type-fest'

export type Action<P = undefined> = P extends undefined
  ? () => Promisable<void>
  : (props: P) => Promisable<void>
