import { value }               from '@texting/string-value'
import { NUM }                 from '@typen/enum-data-types'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Proj }                from './Proj.js'

export class Fluo {
  isLiteral = isLiteral
  isNumeric = isNumeric
  parseNum = parseNum
  pos
  neg
  str
  numerals = Array()
  literals = Array()
  wd = 14
  mode = 'render'
  constructor(pres) {
    this.pos = new Proj(pres.pos)
    this.neg = new Proj(pres.neg)
    this.str = new Proj(pres.str)
  }
  reset(wd) {
    this.wd = wd ?? 14
    this.numerals.length = 0
    this.literals.length = 0
    this.pos.reset()
    this.neg.reset()
    this.str.reset()
  }
  project(vec, wd) {
    this.reset(wd)
    const len = vec.length
    for (let i = 0, x, n, { pos, neg, str } = this; i < len; i++) {
      x = vec[i], n = this.parseNum(x)
      if (this.isNumeric(n)) {
        this.numerals[i] = n >= 0 ? pos.note(n) : neg.note(n)
        continue
      }
      if (this.isLiteral(x)) {
        this.literals[i] = str.note(n = value(x, this.wd))
        continue
      }
      { this.literals[i] = NaN }
    }
    const pos = this.pos.ready(), neg = this.neg.ready(), str = this.str.ready()
    const tar = Array(len), mode = this.mode
    for (let i = 0, n; i < len; i++)
      tar[i] =
        typeof (n = this.numerals[i]) === NUM ? (!(n < 0) ? pos[mode](n, vec[i]) : neg[mode](n, vec[i])) :
          typeof (n = this.literals[i]) === NUM ? str[mode](n, vec[i]) :
            ''
    return tar
  }
}