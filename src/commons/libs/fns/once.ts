// biome-ignore lint/suspicious/noExplicitAny: we explicitly want to allow any type
export function once<Fn extends (...args: any[]) => any>(fn: Fn) {
  const unresolvedSymbol = Symbol('unresolved')
  let result: ReturnType<Fn> = unresolvedSymbol as ReturnType<Fn>

  return (...args: Parameters<Fn>): ReturnType<Fn> => {
    if (result !== unresolvedSymbol) return result

    result = fn(...args) as ReturnType<Fn>

    return result
  }
}
