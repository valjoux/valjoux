import { overtime } from '@valjoux/timeout'

export function linger(ms, fn, arg, df) {
  const timing = this?.timing ?? overtime
  return timing(ms, fn, arg, df)
}

