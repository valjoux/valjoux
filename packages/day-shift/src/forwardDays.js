import { isLeap }    from '@valjoux/util-leap-year'
import { monthDays } from '@valjoux/util-month-days'

export const forwardDays = (ymd, dif) => {
  let [y, m, d] = ymd, q
  const lp = { y, m, cr: isLeap(y), nx: isLeap(y + 1) }
  d += dif
  while (d > (q = nextYDs.call(lp))) d -= q, nextY.call(lp)
  while (d > (q = nextMDs.call(lp))) d -= q, nextM.call(lp)
  return ymd[0] = lp.y, ymd[1] = lp.m, ymd[2] = d, ymd
  // return [lp.y, lp.m, d]
}

const nextY = function () { this.y++, this.cr = this.nx, this.nx = isLeap(this.y) }
const nextM = function () { this.m >= 12 ? (this.m = 1, nextY.call(this)) : this.m++ }
const nextYDs = function () { return this.cr && this.m <= 2 || 2 < this.m && this.nx ? 366 : 365 }
const nextMDs = function () { return monthDays(null, this.m, this.cr) }
