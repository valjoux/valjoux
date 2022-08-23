import { value }               from '@texting/string-value'
import { isLiteral }           from '@typen/literal'
import { valid }               from '@typen/nullish'
import { isNumeric, parseNum } from '@typen/num-strict'
import { Proj }                from '../fluo.gamma/Proj.js'

const RENDER = 'render'

export class FluoDelta {
  num = {
    by: isNumeric,
    to: parseNum,
    pro: null,
    neg: null
  }
  str = {
    by: isLiteral,
    to: value,
    pro: null,
    wd: 14,
  }
  types = []
  values = []
  mode = RENDER
  mutate = false
  constructor(pres, mutate, mode) {
    if (valid(mutate)) this.mutate = mutate
    if (valid(mode)) this.mode = mode
    this.num.pro = new Proj(pres.pos ?? pres.num)
    if (pres.neg) this.num.neg = new Proj(pres.neg)
    this.str.pro = new Proj(pres.str)
  }
  get width() { return this.str.wd }
  set width(value) { return this.str.wd = value }

  reset(width) {
    this.width = width ?? 14
    this.types.length = 0
    this.values.length = 0
    this.num.pro?.reset()
    this.str.pro?.reset()
  }
  project(vec) {
    this.reset(vec.width)
    const len = vec.length, mode = this.mode, arr = this.mutate ? vec : Array(len)
    const { num, str } = this
    for (let i = 0, x, n; i < len; i++) {
      x = vec[i], n = num.to(x)
      if (num.by(n)) {
        this.types[i] = 1
        this.values[i] = num.pro.note(n)
        continue
      }
      if (str.by(x)) {
        this.values[i] = str.pro.note(n = str.to(x, this.width))
        continue
      }
      { this.values[i] = NaN }
    }
    num.pro.ready(), str.pro.ready()
    for (let i = 0; i < len; i++) arr[i] = (this.types[i] ? num : str).pro[mode](this.values[i], vec[i])
    return arr
  }
}