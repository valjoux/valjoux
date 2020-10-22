import { dashify }                              from '@valjoux/convert'
import { isLeap }                               from '@valjoux/util-leap-year'
import { monthDays, monthToSeason, seasonLast } from '@valjoux/util-month-days'

export const year = dashed => +dashed.slice(0, 4)
export const month = dashed => +dashed.slice(5, 7)
export const day = dashed => +dashed.slice(8, 10)
export const yearMonth = (dashed) => dashed.slice(0, 7)

export const season = (dashed) => year(dashed) + 'Q' + monthToSeason(month(dashed))

export const seasonEnds = (year) => {
  const islp = isLeap(year)
  return [3, 6, 9, 12].map(m => dashify(year, m, monthDays(year, m, islp)))
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


