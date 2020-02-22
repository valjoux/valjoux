import { monthDays } from '@valjoux/util-ymd'

export const seasonLoHi = (ymd) => {
  const [y, m] = ymd
  let hi = ~~((m - 1) / 3 + 1) * 3
  return [[y, hi - 2, 1], [y, hi, monthDays([y, hi])]]
}

export const monthLoHi = (ymd) => {
  const [y, m] = ymd
  return [[y, m, 1], [y, m, monthDays(ymd)]]
}
