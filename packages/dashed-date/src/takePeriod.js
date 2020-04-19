import { dashify }               from '@valjoux/convert'
import { isLeap }                from '@valjoux/util-leap-year'
import { monthDays, seasonLast } from '@valjoux/util-month-days'
import { month, year }           from './utils/readParts'

export const toYearMonth = (dashed) => dashed.slice(0, 7)

export const seasonEnds = (year) => {
  const islp = isLeap(year)
  return [3, 6, 9, 12].map(m => dashify(year, m, monthDays(year, m, islp)))
}

export const seasonLo = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m)
  return dashify(y, hi - 2, 1)
}

export const seasonHi = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m)
  return dashify(y, hi, monthDays(y, hi))
}

export const seasonLoHi = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m)
  return [dashify(y, hi - 2, 1), dashify(y, hi, monthDays(y, hi))]
}

export const monthLo = (dashed) => {
  const y = year(dashed), m = month(dashed)
  return dashify(y, m, monthDays(y, 1))
}

export const monthHi = (dashed) => {
  const y = year(dashed), m = month(dashed)
  return dashify(y, m, monthDays(y, m))
}

export const monthLoHi = (dashed) => {
  const y = year(dashed), m = month(dashed)
  return [dashify(y, m, 1), dashify(y, m, monthDays(y, m))]
}

