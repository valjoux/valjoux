import { Bound } from '@aryth/bound'
import { Proj }  from '@palett/projector'
import { value } from '@texting/string-value'
import { NUM }   from '@typen/enum-data-types'

export class Fluo extends Array {
  pos = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  neg = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  str = new Bound(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
  wd = 0
  constructor() {
    super()
  }
  note(x, i) {
    return this[i] = x >= 0 ? this.pos.update(x) : this.neg.update(x)
  }
  mark(x, i) {
    if (!x?.length) return this.note(NaN, i)
    const n = parseFloat(x = x.trim())
    if (isNaN(x - n)) {
      if (x.length > this.wd) this.wd = x.length
      return this[i] = x
    }
    else {
      return this.note(n, i)
    }
  }

  project(vec, pres) {
    const { length } = vec
    for (let i = 0, x; i < length; i++) {
      typeof (x = vec[i]) === NUM
        ? this.note(x, i)
        : this.mark(x, i)
    }
    const pos = Proj.from(this.pos, pres.pos), neg = Proj.from(this.neg, pres.neg)
    for (let i = 0, x; i < length; i++) {
      typeof (x = this[i]) === NUM
        ? this[i] = x >= 0 ? pos.render(x, vec[i]) : neg.render(x, vec[i])
        : this[i] = this.str.update(value(x, this.wd))
    }
    const str = Proj.from(this.str, pres.str)
    for (let i = 0, x; i < length; i++) {
      typeof (x = this[i]) === NUM
        ? this[i] = str.render(x, vec[i])
        : void 0
    }
    return this
  }
  info() {
    return `[str] [${this.str.lo}, ${this.str.hi}] [neg] [${this.neg.lo}, ${this.neg.hi}] [pos] [${this.pos.lo}, ${this.pos.hi}]`
  }
}