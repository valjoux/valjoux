import { overtime } from '../util'

export function linger(ms, fn, ...args) {
  return overtime.call(this, ms, fn, args)
}

