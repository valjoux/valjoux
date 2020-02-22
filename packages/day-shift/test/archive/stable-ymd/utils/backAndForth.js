import { leapYear } from './leapYear'
import { monthCap } from './monthCap'

export const nextMonth = (dt) => {
  dt.m += 1
  if (dt.m > 12) {
    dt.y += 1
    dt.m = 1
    dt.lp = leapYear(dt.y)
  }
  dt.cap = monthCap(dt.m, dt.lp)
  return dt
}
export const prevMonth = (dt) => {
  dt.m -= 1
  if (dt.m < 1) {
    dt.y -= 1
    dt.m = 12
    dt.lp = leapYear(dt.y)
  }
  dt.cap = monthCap(dt.m, dt.lp)
  return dt
}

export const yearForth = (dt) => {
  let { y, m, d } = dt
  while (d >= 365) {
    d -= 365
    if (m <= 2 && leapYear(y++) || m > 2 && leapYear(++y)) d--
  }
  const lp = leapYear(y)
  return { y, m, d, lp, cap: monthCap(m, lp) }
}

export const yearBack = (dt) => {
  let { y, m, d } = dt
  while (d <= -365) {
    d += 365
    if (m <= 2 && leapYear(--y) || m > 2 && leapYear(y--)) d++
  }
  const lp = leapYear(y)
  return { y, m, d, lp, cap: monthCap(m, lp) }
}

export const daysForth = (dt) => {
  while (dt.d > dt.cap) {
    dt.d -= dt.cap
    dt |> nextMonth
  }
  return dt
}

export const daysBack = (dt) => {
  dt.cap = 0
  while (dt.d < dt.cap) {
    dt |> prevMonth
    dt.d += dt.cap
  }
  return daysForth(dt)
}
