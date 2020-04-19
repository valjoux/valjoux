import { monthDays, seasonLast } from '@valjoux/util-month-days'
import { acquire }               from '@vect/vector-merge'

export const seasonLo = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m)
  return [y, hi - 2, 1]
}

export const seasonHi = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m)
  return [y, hi, monthDays(y, hi)]
}

export const seasonLoHi = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m)
  return [[y, hi - 2, 1], [y, hi, monthDays(y, hi)]]
}

export const monthLo = (ymd) => acquire(ymd.slice(0, 2), 1)

export const monthHi = (ymd) => acquire(ymd.slice(0, 2), monthDays.apply(null, ymd))

export const monthLoHi = (ymd) => {
  const [y, m] = ymd
  return [[y, m, 1], [y, m, monthDays(y, m)]]
}
