import { readDay, readYearMonth } from '@valjoux/util-bitwise'
import { isLeap } from '@valjoux/util-leap-year'
import { monthDays as monthEnd } from '@valjoux/util-month-days'

export const forwardDays = (int, dif) => {
  let ym = readYearMonth(int), d = readDay(int) + dif, y = ym[0]
  const lpEnt = {
    cr: isLeap(y),
    nx: isLeap(y + 1)
  }
  const nxY = nextYear.bind(lpEnt), nxM = nextMonth.bind(lpEnt),
    yDays = yearDays.bind(lpEnt), mDays = monthDays.bind(lpEnt)
  let q
  while (d >= (q = yDays(ym))) d -= q, nxY(ym)
  while (d > (q = mDays(ym))) d -= q, nxM(ym)
  return ym.push(d), ym
}

const nextYear = function (ym) { return ym[0]++, this.cr = this.nx, this.nx = isLeap(ym[0]), ym }
const nextMonth = function (ym) { return ym[1] >= 12 ? (ym[1] = 1, nextYear.call(this, ym)) : (ym[1]++, ym) }
const yearDays = function (ym) { return this.cr && ym[1] <= 2 || 2 < ym[1] && this.nx ? 366 : 365 }
const monthDays = function (ym) { return monthEnd(ym[1], this.cr) }
