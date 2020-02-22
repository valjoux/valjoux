import { daysBack, daysForth, yearBack, yearForth } from './utils/backAndForth'
import { calibre, endOfMonth } from './utils/calibre'
import { leapYear } from './utils/leapYear'
import { monthCap } from './utils/monthCap'
import { delogger } from '@spare/logger'
import { ymdToInt } from '@valjoux/convert'

export const belongTo = (ymd, lo, hi) => {
  const int = ymdToInt(ymd)
  return ymdToInt(lo) <= int && int <= ymdToInt(hi)
}

export const shiftDay = function ([y, m, d], days) {
  let lp = leapYear(y),
    /** @type {{y: number, m: number,d: number, lp: boolean, cap: number }} */
    dt = { y, m, d: d + days, lp, cap: monthCap(m, lp) }
  if (dt.d - 365 > 0) dt = yearForth(dt)
  if (dt.d + 365 < 0) dt = yearBack(dt)
  dt = dt.d >= 0
    ? daysForth(dt)
    : daysBack(dt)
  return [dt.y, dt.m, dt.d]
}

export const shiftMonth = ([y, m, d], months) => {
  ({ y, m, d }) |> delogger
  let eom = endOfMonth(y, m)
  let ym = y * 12 + m + months
  y = ~~(ym / 12)
  m = ym % 12
  if (m < 1) {
    y--
    m = 12
  }

  return calibre(y, m, d, eom)
}

export const shiftQuarter = ([y, m, d], quarters) => shiftMonth([y, m, d], quarters * 3)

export const shiftYear = ([y, m, d], years) => calibre(y + years, m, d, endOfMonth(y, m))

export const seasonLoHi = ([y, m]) => {
  let hi = ~~((m - 1) / 3 + 1) * 3
  return [[y, hi - 2, 1], [y, hi, endOfMonth(y, hi)]]
}

export const monthLoHi = ([y, m]) => [[y, m, 1], [y, m, endOfMonth(y, m)]]
