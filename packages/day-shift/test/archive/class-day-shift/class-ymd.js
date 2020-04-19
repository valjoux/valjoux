import { isLeap }    from '@valjoux/util-leap-year'
import { monthDays } from '@valjoux/util-month-days'

export const md = ({ y, m }) => m === 2 ? 28 + isLeap(y) : 30 + m % 2 ^ m >= 8
export const prevMonth = (dt) => (dt.m <= 1 ? (dt.y--, dt.m = 12) : dt.m--, dt)
export const nextMonth = (dt) => (dt.m >= 12 ? (dt.y++, dt.m = 1) : dt.m++, dt)

export class YMD {
  constructor (y, m, d) {
    this.y = y, this.m = m, this.d = d
  }

  static of (y, m, d) { return new YMD(null, y, m, d) }

  nextYearDays () { return isLeap(this.y) && this.m <= 2 || 2 < this.m && isLeap(this.y + 1) ? 366 : 365 }
  prevYearDays () { return isLeap(this.y - 1) && this.m <= 2 || 2 < this.m && isLeap(this.y) ? 366 : 365 }

  nextMonthDays () { return monthDays(null, this.nextMonth(false)) }
  prevMonthDays () { return monthDays(null, this.prevMonth(false)) }

  prevMonth (mutate = true) {return mutate ? prevMonth(this) : prevMonth({ y: this.y, m: this.m })}
  nextMonth (mutate = true) {return mutate ? nextMonth(this) : nextMonth({ y: this.y, m: this.m })}

  positiveDayShift (dif) {
    let q
    dif += this.d
    while (dif >= (q = this.nextYearDays())) this.y++, dif -= q
    while (dif > (q = this.nextMonthDays())) this.nextMonth(), dif -= q
    return this.d = dif, this
  }
  negativeDayShift (dif) {
    let q
    dif += this.d
    while (dif + (q = this.prevYearDays()) <= 0) this.y--, dif += q
    while (dif <= 0) dif += this.prevMonthDays(), this.prevMonth()
    return this.d = dif, this
  }

  dayShift (dif) {
    return dif > 0 ? this.positiveDayShift(dif) : this.negativeDayShift(dif)
  }

  toYmd () { return [this.y, this.m, this.d] }
}

