import { makeEmbedded }          from '@foba/util'
import { fluoVector }            from '@palett/fluo-vector'
import { BISTRO, METRO, PRETTY } from '@palett/presets'
import { decoCrostab, decoPale } from '@spare/logger'
import { stringValue }           from '@texting/string-value'
import { STR }                   from '@typen/enum-data-types'
import { isLiteral }             from '@typen/literal'
import { isNumeric, parseNum }   from '@typen/numeral'
import { iterate }               from '@vect/vector-mapper'
import { strategies }            from '../src/strategies.js'
import { Arcs }                  from './bounds/Arcs.js'
import { Fluo as FluoAlpha }     from './bounds/fluo.alpha/Fluo.js'
import { Fluo as FluoBeta }      from './bounds/fluo.beta/Fluo.js'
import { FluoDelta }             from './bounds/fluo.delta/fluo.delta.js'
import { Fluo as FluoGamma }     from './bounds/fluo.gamma/Fluo.js'
import { PresetCollection }      from '@palett/fluo'
import { says }                  from '@spare/xr'

const CONFIG_X = {
  by: isNumeric,
  to: parseNum
}
const CONFIG_Y = {
  by: isLiteral,
  to: stringValue
}
const PRES = { pos: PRETTY, neg: BISTRO, str: METRO }
const CONFIGS = PresetCollection.build(PRETTY, BISTRO).setBound()
const fluoGamma = new FluoGamma(PRES)
const fluoDelta = (new FluoDelta(PRES))
const proc = o => {
  for (let k in o) {
    const vec = o[k]
    vec.width = 0
    for (let i = 0, x; i < vec.length; i++) { if (typeof (x = vec[i]) === STR || x.length > vec.width) vec.width = x.length}
  }
  return o
}
const { lapse, result } = strategies({
  repeat: 1E+5,
  showPretty: false,
  candidates: {
    // empty: [],
    // one_zero: [ 0 ],
    // one_nan: [ NaN ],
    // asc_6: [ 0, 1, 2, 3, 4, 5 ],
    // desc_6: [ 5, 4, 3, 2, 1, 0 ],
    // misc: [ false, 101, 102, 103, 104 ],
    // misc2: [ 1, 2, NaN, 4, 5 ],
    upTo5: [ '0', '01', '012', '0123', '01234' ],
    tx_nums: [ '244', '200', '306', '400', '150', '220', '190', '495' ],
    tx_strs: 'comprehend how it\'s driven by animal spirits'.split(' '),
    dates: [ '2022-01-31', '2022-02-28', '2022-03-31', '2022-06-30', '2022-09-30', '2022-12-31' ],
    words: [ 'Alexander the Great', 'Caesar', 'Putin', 'Hannibal', 'Farnese', 'Charles', 'Frederick', 'Napoleon' ],
    tx_padded: [ '  8', ' 32', ' 64', '108', '0', '-8', '-24', '-36', 'digit', 'bit', '~~~', '-', '' ],
  } |> proc |> makeEmbedded,
  methods: {
    // bench: x => x,
    cla: (vec) => {
      const x = CONFIG_X, y = CONFIG_Y
      const hi = vec?.length
      let veX = null, veY = null
      if (!hi) return [ veX, veY ]
      iterate(vec, (v, i) => {
          if (x.by(v) && (veX ?? (veX = Array(hi)))) {
            if ((v = x.to(v)) > (veX.max ?? (veX.max = veX.min = v))) { veX.max = v }
            else if (v < veX.min) { veX.min = v }
            return veX[i] = v
          }
          if (y.by(v) && (veY ?? (veY = Array(hi)))) {
            if ((v = y.to(v)) > (veY.max ?? (veY.max = veY.min = v))) { veY.max = v }
            else if (v < veY.min) { veY.min = v }
            return veY[i] = v
          }
          return NaN
        },
        hi)
      return [ veX, veY ]
    },
    arc: vec => (new Arcs(vec.length)).overwrite(vec),
    alpha: vec => (new FluoAlpha(vec.length)).project(vec, PRES),
    beta: (vec) => (new FluoBeta(vec.width)).project(vec.slice(), PRES),
    gamma: (vec) => fluoGamma.project(vec, vec.width),
    delta: (vec) => fluoDelta.project(vec),
    rea: vec => fluoVector(vec, CONFIGS),
  }
})

lapse |> decoCrostab |> console.log

// result.cell('tx_padded', 'dev') |> console.log
result.cell('tx_padded', 'alpha') |> decoPale |> says['alpha']
result.cell('words', 'alpha') |> decoPale |> says['alpha']
result.cell('tx_padded', 'beta') |> decoPale |> says['beta']
result.cell('words', 'beta') |> decoPale |> says['beta']
result.cell('tx_padded', 'gamma') |> decoPale |> says['gamma']
result.cell('words', 'gamma') |> decoPale |> says['gamma']
result.cell('tx_padded', 'delta') |> decoPale |> says['delta']
result.cell('words', 'delta') |> decoPale |> says['delta']
// lapse |> DecoCrostab({ presets: [] }) |> console.log
// result |> DecoCrostab({ presets: [] }) |> console.log