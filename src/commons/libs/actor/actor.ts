import type { Observable } from '@legendapp/state'
import type { Action } from '../react/react.action'

export type ActionRecord = {
  // biome-ignore lint/suspicious/noExplicitAny: could be any actions
  [K in string]: Action<any>
}

export type Actor<
  // biome-ignore lint/suspicious/noExplicitAny: could be any observable
  $ extends Observable<any>,
  A extends ActionRecord,
> = {
  $: $
  act: {
    [K in keyof A]: (...props: Parameters<A[K]>) => ReturnType<A[K]>
  }
}
