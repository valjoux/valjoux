import { backwardDays, forwardDays } from '@valjoux/day-shift'
import { calibre, monthDays } from '@valjoux/util-ymd'
import { intToYmd } from '@valjoux/convert'

export const belongTo = (int, lo, hi) => lo <= int && int <= hi

export const shiftDay = (int, days) => {
  if (days > 0) return forwardDays(int, days)
  if (days < 0) return backwardDays(int, days)
  return int
}

export const shiftMonth = (int, dif) => {
  const ymd = int |> intToYmd
  let [y, m, d] = ymd
  let hi = monthDays(ymd), dy
  dy = ~~((m += dif) / 12), m %= 12, y += dy
  if (m < 1) (y--, m += 12)
  return calibre(ymd, hi)
}

export const shiftQuarter = (int, dif) => shiftMonth(int, dif * 3)

export const shiftYear = (int, dif) => calibre((int[0] + dif, int), monthDays(int))

export const seasonLoHi = (int) => {
  const [y, m] = int
  let hi = ~~((m - 1) / 3 + 1) * 3
  return [[y, hi - 2, 1], [y, hi, monthDays([y, hi])]]
}

export const monthLoHi = (int) => {
  const [y, m] = int
  return [[y, m, 1], [y, m, monthDays(int)]]
}
