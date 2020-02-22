import { monthCap } from './monthCap'
import { leapYear } from './leapYear'

export const endOfMonth = (y, m) => monthCap(m, leapYear(y))

export const calibre = (y, m, d, hi) => {
  if (d >= hi) return [y, m, endOfMonth(y, m)]
  if (d >= 28) return [y, m, Math.min(d, endOfMonth(y, m))]
  return [y, m, d]
}
