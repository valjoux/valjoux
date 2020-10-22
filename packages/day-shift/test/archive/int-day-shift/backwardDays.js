import { intToYmd, ymdToInt } from '@valjoux/convert'
import { isLeap }             from '@valjoux/util-leap-year'
import { monthDays }          from '@valjoux/util-month-days'

export const backwardDays = (int, dif) => {
  let [y, m, d] = intToYmd(int), q
  const lp = { y, m, py: isLeap(y - 1), cr: isLeap(y) }
  d += dif
  while (d + (q = prevYDs.call(lp)) <= 0) d += q, prevY.call(lp)
  while (d <= 0) d += prevMDs.call(lp), prevM.call(lp)
  return ymdToInt([lp.y, lp.m, d])
}

const prevY = function () { this.y--, this.cr = this.py, this.py = isLeap(this.y) }
const prevM = function () { this.m <= 1 ? (this.m = 12, prevY.call(this)) : this.m-- }
const prevYDs = function () { return this.py && this.m <= 2 || 2 < this.m && this.cr ? 366 : 365 }
const prevMDs = function () { return this.m <= 1 ? monthDays(null, 12, this.py) : monthDays(null, this.m - 1, this.cr)}
