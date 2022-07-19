import { makeEmbedded }        from '@foba/util'
import { decoCrostab, says }   from '@spare/logger'
import { stringValue, value }  from '@texting/string-value'
import { isLiteral }           from '@typen/literal'
import { isNumeric, parseNum } from '@typen/numeral'
import { strategies }          from '@valjoux/strategies'
import { iterate }             from '@vect/vector-mapper'
import { NUM, STR }            from '@typen/enum-data-types'

const CONFIG_X = {
  by: isNumeric,
  to: parseNum
}
const CONFIG_Y = {
  by: isLiteral,
  to: stringValue
}

export class ArcType {
  static num = 1
  static str = 0
}

export class Arcs extends Array {
  tHi = Number.NEGATIVE_INFINITY
  tLo = Number.POSITIVE_INFINITY
  nHi = Number.NEGATIVE_INFINITY
  nLo = Number.POSITIVE_INFINITY
  wd = 0
  ts = 0
  constructor(hi) { super(hi) }
  etch(x, i) {
    if (x === undefined || x === null) { return this.etchNum(NaN, i) }
    if (typeof x === NUM) { return this.etchNum(x, i) }
    if (typeof x !== STR) x = x.toString()
    {
      const n = parseFloat(x = x.trim())
      if (x.length === 0) { return this.etchNum(NaN, i) }
      if (isNaN(x - n)) { return this.etchStr(x, i) }
      { return this.etchNum(n, i) }
    }
  }
  etchNum(x, i) {
    this.hasNum = true // this.ts |= 1 << 1
    if (x > this.nHi) { this.nHi = x }
    if (x < this.nLo) { this.nLo = x }
    return this[i] = x
  }
  etchStr(x, i) {
    this.hasStr = true // this.ts |= 1 << 0
    if (x.length > this.wd) this.wd = x.length
    return this[i] = x
  }
  get hasNum() { return (this.ts >> 1) & 1}
  get hasStr() { return (this.ts >> 0) & 1}
  set hasNum(value) { this.ts |= value << 1 }
  set hasStr(value) { this.ts |= value << 0 }
  ratio2() {
    const size = this.length
    if (this.hasNum) {
      for (let i = 0, df = this.nHi - this.nLo; i < size; i++)
        if (typeof this[i] === NUM && !isNaN(this[i])) { this[i] = ~(((this[i] - this.nLo) * 0xFF) / df)}
    }
    if (this.hasStr) {
      for (let i = 0, x, n; i < size; i++)
        if (typeof (x = this[i]) === STR)
          (this[i] = n = value(x, this.wd)) > this.tHi ? (this.tHi = n) : n < this.tLo ? (this.tLo = n) : undefined
    }
    for (let i = 0, n, df = this.tHi - this.tLo; i < size; i++) {
      if (isNaN(n = this[i])) continue
      if (n < 0) {
        this[i] = ~n << 8
      } else {
        this[i] = ~~(((n - this.tLo) * 0xFF) / df)
      }
    }
    return this
  }
  ratio() {
    const size = this.length
    if (this.ts === 0b01) {
      for (let i = 0, n; i < size; i++)
        (this[i] = n = value(this[i], this.wd)) > this.tHi ? (this.tHi = n) : n < this.tLo ? (this.tLo = n) : undefined
      for (let i = 0, tDf = this.tHi - this.tLo; i < size; i++)
        this[i] = ~~(((this[i] - this.tLo) * 0xFF) / tDf)
      return this
    }
    if (this.ts === 0b10) {
      for (let i = 0, nDf = this.nHi - this.nLo, n; i < size; i++)
        if (!isNaN(n = this[i])) { this[i] = ~~(((n - this.nLo) * 0xFF) / nDf)}
      return this
    }
    if (this.ts === 0b11) {
      for (let i = 0, x, n, nDf = this.nHi - this.nLo; i < size; i++) {
        x = this[i]
        if (typeof x === NUM && !isNaN(x)) this[i] = ~(((x - this.nLo) * 0xFF) / nDf)
        if (typeof x === STR) {
          this[i] = n = value(x, this.wd)
          n > this.tHi ? (this.tHi = n) : n < this.tLo ? (this.tLo = n) : undefined
        }
      }
      for (let i = 0, tDf = this.tHi - this.tLo, n; i < size; i++) {
        if (isNaN(n = this[i])) continue
        if (n < 0) {
          this[i] = ~n << 8
        } else {
          this[i] = ~~(((n - this.tLo) * 0xFF) / tDf)
        }
      }
      return this
    }
  }
  overwrite(vec) {
    for (let i = 0, hi = vec.length; i < hi; i++) { this.etch(vec[i], i) }
    return this.ratio2()
  }
}

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    empty: [],
    one_zero: [0],
    one_nan: [NaN],
    asc_6: [0, 1, 2, 3, 4, 5],
    desc_6: [5, 4, 3, 2, 1, 0],
    misc: [false, 101, 102, 103, 104],
    misc2: [1, 2, NaN, 4, 5],
    upTo5: ['0', '01', '012', '0123', '01234'],
    tx_nums: ['244', '200', '306', '400', '150', '220', '190', '495'],
    tx_strs: 'comprehend how it\'s driven by animal spirits'.split(' '),
    // dates: ['2022-01-31', '2022-02-28', '2022-03-31', '2022-06-30', '2022-09-30', '2022-12-31'],
    // words: ['Alexander', 'Caesar', 'Putin', 'Hannibal', 'Farnese', 'Charles', 'Frederick', 'Napoleon'],
    tx_padded: ['  8', ' 64', '128', '1024', 'digits', ''],
  } |> makeEmbedded,
  methods: {
    bench: x => x,
    cla: (vec, x = CONFIG_X, y = CONFIG_Y) => {
      const hi = vec?.length
      let veX = null, veY = null
      if (!hi) return [veX, veY]
      iterate(vec, (v, i) => {
          if (x.by(v) && (veX ?? (veX = Array(hi)))) {
            if ((v = x.to(v)) > (veX.max ?? (veX.max = veX.min = v))) { veX.max = v } else if (v < veX.min) { veX.min = v }
            return veX[i] = v
          }
          if (y.by(v) && (veY ?? (veY = Array(hi)))) {
            if ((v = y.to(v)) > (veY.max ?? (veY.max = veY.min = v))) { veY.max = v } else if (v < veY.min) { veY.min = v }
            return veY[i] = v
          }
          return NaN
        },
        hi)
      return [veX, veY]
    },
    // rea: x => x,
    arc: vec => (new Arcs(vec.length)).overwrite(vec),
    // dev: x => x,
    // fut: x => x,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']