import { overtime } from './timings'

export function linger(ms, fn, arg, df) {
  const timing = this?.timing ?? overtime
  return timing(ms, fn, arg, df)
}

