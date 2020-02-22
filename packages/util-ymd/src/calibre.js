import { monthDays } from './monthDays'
import { min } from '@aryth/comparer'

export const calibre = (ymd, hi) => {
  let d = ymd[2]
  if (d >= hi) return ymd[2] = monthDays(ymd), ymd
  if (d >= 28) return ymd[2] = min(d, monthDays(ymd)), ymd
  return ymd
}


