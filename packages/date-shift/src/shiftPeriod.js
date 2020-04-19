import { min }                       from '@aryth/comparer'
import { backwardDays, forwardDays } from '@valjoux/day-shift'
import { monthDays }                 from '@valjoux/util-month-days'

export const shiftDay = (ymd, days) => {
  if (days > 0) return forwardDays(ymd, days)
  if (days < 0) return backwardDays(ymd, days)
  return ymd
}

export const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd, isEnd = d >= monthDays(ymd[0], ymd[1]), dy
  dy = ~~((m += dif) / 12), m %= 12, y += dy
  if (m < 1) (y--, m += 12)
  ymd[0] = y , ymd[1] = m , ymd[2] = isEnd ? monthDays(y, m) : min(d, monthDays(y, m))
  return ymd
}

export const shiftYear = (ymd, dif) => {
  let [y, m, d] = ymd, isEnd = d >= monthDays(y, m)
  ymd[0] += dif, ymd[2] = isEnd ? monthDays(y, m) : min(d, monthDays(y, m))
  return ymd
}

export const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3)


