import { Bound }               from '@aryth/bound'
import { value }               from '@texting/string-value'
import { NUM, STR }            from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { HslProj }             from './HslProj.js'

export class Fluo {
  isLiteral = isLiteral
  isNumeric = isNumeric
  parseNum = parseNum
  pos = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  neg = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  str = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  numerals = []
  literals = []
  wd = 14
  constructor(wd) {
    if (wd) this.wd = wd
  }
  collect2(vec) {
    let len = vec.length
    for (let i = 0, t, x, n; i < len; i++)
      switch (x = vec[i], t = typeof x) {
        case NUM:
          this.numerals[i] = isNaN(x) ? NaN : x >= 0 ? this.pos.update(x) : this.neg.update(x)
          break
        case STR:
          if (!isNaN(n = this.parseNum(x))) { this.numerals[i] = n >= 0 ? this.pos.update(n) : this.neg.update(n) }
          else { this.literals[i] = this.isLiteral(x) ? this.str.update(value(x, this.wd)) : NaN }
          break
        default:
          this.literals[i] = NaN
      }
    return this
  }
  collect(vec) {
    let len = vec.length
    for (let i = 0, x, n; i < len; i++) {
      x = vec[i], n = this.parseNum(x)
      if (this.isNumeric(n)) {
        this.numerals[i] = n >= 0 ? this.pos.update(n) : this.neg.update(n)
        continue
      }
      if (this.isLiteral(x)) {
        this.literals[i] = this.str.update(n = value(x, this.wd))
        continue
      }
      { this.literals[i] = NaN }
    }
    return this
  }
  project(vec, pres) {
    if (!this.numerals?.length || !this.literals?.length) this.collect(vec)
    const len = vec.length,
          pos = new HslProj(this.pos, pres.pos),
          neg = new HslProj(this.neg, pres.neg),
          str = new HslProj(this.str, pres.str),
          tar = Array(len)
    for (let i = 0, n; i < len; i++)
      tar[i] =
        typeof (n = this.numerals[i]) === NUM ? (isNaN(n) ? pos.render(NaN, vec[i]) : n >= 0 ? pos.render(n, vec[i]) : neg.render(n, vec[i])) :
          typeof (n = this.literals[i]) === NUM ? (isNaN(n) ? str.render(NaN, vec[i]) : str.render(n, vec[i])) :
            ''
    return tar
  }
  info() {
    return `[str] [${this.str.lo}, ${this.str.hi}] [neg] [${this.neg.lo}, ${this.neg.hi}] [pos] [${this.pos.lo}, ${this.pos.hi}]`
  }
}