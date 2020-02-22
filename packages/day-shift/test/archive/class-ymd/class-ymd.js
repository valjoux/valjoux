import { isLeap } from './utils/isLeap'
import { deca, deco, logger, says, Xr, xr } from '@spare/logger'

export const getMonthEnd = ({ y, m }) => m === 2 ? 28 + isLeap(y) : 30 + m % 2 ^ m >= 8

class YMD {
  constructor (y, m, d) {
    this.y = y
    this.m = m
    this.d = d
  }

  static of (y, m, d) { return new YMD(y, m, d) }

  isCurrYL () { return isLeap(this.y) }
  isPrevYL () { return isLeap(this.y - 1) }
  isNextYL () { return isLeap(this.y + 1) }
  forwardYearDays () { return this.m <= 2 && this.isCurrYL() || 2 < this.m && this.isNextYL() ? 366 : 365 }
  backwardYearDays () { return this.m <= 2 && this.isPrevYL() || 2 < this.m && this.isCurrYL() ? 366 : 365 }
  forwardMonthDays () { return getMonthEnd(this) }
  backwardMonthDays () { return getMonthEnd(this.monthToPrev(false))}

  monthToPrev (mutate = true) {
    if (mutate) {
      this.m -= 1
      if (this.m < 1) this.y--, this.m = 12
      return this
    } else {
      let m = this.m - 1, y = this.y
      if (m < 1) m = 12, y--
      return { y, m }
    }
  }

  monthToNext (mutate = true) {
    if (mutate) {
      this.m++
      if (this.m > 12) this.y++, this.m = 1
      return this
    } else {
      let m = this.m + 1, y = this.y
      if (m > 12) m = 1, y++
      return { y, m }
    }
  }

  dayShift (dif) {
    return dif > 0
      ? this.positiveDayShift(dif += this.d, dif)
      : this.negativeDayShift(dif += this.d, dif)
  }

  positiveDayShift (dif) {
    let q
    while (dif >= (q = this.forwardYearDays())) {
      dif -= q
      this.y++
    }
    while (dif > (q = this.forwardMonthDays())) {
      dif -= q
      this.monthToNext()
    }
    this.d = dif
    return this
  }

  negativeDayShift (dif) {
    let q
    while (dif <= -(q = this.backwardYearDays())) {
      dif += q
      this.y--
    }
    while (dif <= 0) {
      dif += this.backwardMonthDays()
      this.monthToPrev()
    }
    this.d = dif
    return this
  }

  toYmd () {
    return [this.y, this.m, this.d]
  }

  get totx () { return this.toYmd() |> deco }

  simtext (d) {return d !== undefined ? [this.y, this.m, d] |> deco : this.totx }
}

