import { readDay, readYearMonth } from '@valjoux/util-bitwise'
import { isLeap } from '@valjoux/util-leap-year'
import { monthDays } from '@valjoux/util-month-days'

export const backwardDays = (int, dif) => {
  let ym = readYearMonth(int), d = readDay(int) + dif, y = ym[0]
  const lpEnt = {
    py: isLeap(y - 1),
    cr: isLeap(y),
  }
  const prvY = prevYear.bind(lpEnt), prvM = prevMonth.bind(lpEnt),
    prvYDays = prevYearDays.bind(lpEnt), prvMDays = prevMonthDays.bind(lpEnt)
  let q
  while (d + (q = prvYDays(ym)) <= 0) d += q, prvY(ym)
  while (d <= 0) d += prvMDays(ym), prvM(ym)
  return ym.push(d), ym
}

const prevYear = function (ym) { return ym[0]--, this.cr = this.py, this.py = isLeap(ym[0]), ym }
const prevMonth = function (ym) { return ym[1] <= 1 ? (ym[1] = 12, prevYear.call(this, ym)) : (ym[1]--, ym) }
const prevYearDays = function (ym) { return this.py && ym[1] <= 2 || 2 < ym[1] && this.cr ? 366 : 365 }
const prevMonthDays = function (ym) {
  let m = ym[1]
  return m <= 1
    ? monthDays(12, this.py)
    : monthDays(m - 1, this.cr)
}
