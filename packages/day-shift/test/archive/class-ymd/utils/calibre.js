import { monthTopRaw } from './monthTopRaw'
import { isLeap } from './isLeap'
import { min } from '@aryth/comparer'

export const mtail = ([y, m]) => monthTopRaw(m, isLeap(y))

export const calibre = (ymd, hi) => {
  const d = ymd[2]
  if (d >= hi) return ymd[2] = mtail(ymd), ymd
  if (d >= 28) return ymd[2] = min(d, mtail(ymd)), ymd
  return ymd
}


