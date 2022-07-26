import { fluoVector }            from '@palett/fluo-vector'
import { BISTRO, METRO, PRETTY } from '@palett/presets'
import { decoPale }              from '@spare/logger'
import { stringValue }           from '@texting/string-value'
import { isLiteral }             from '@typen/literal'
import { isNumeric, parseNum }   from '@typen/numeral'
import { iterate }               from '@vect/vector-mapper'
import { strategies }            from '../src/strategies.js'
import { Arcs }                  from './bounds/Arcs.js'
import { Fluo as FluoAlpha }     from './bounds/fluo.alpha/Fluo.js'
import { Fluo as FluoBeta }      from './bounds/fluo.beta/Fluo.js'
import { Fluo as FluoGamma }     from './bounds/fluo.gamma/Fluo.js'
import { PresetCollection }      from '@palett/fluo'

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
const { lapse, result } = strategies({
  repeat: 1E+5,
  showPretty: false,
  candidates: {
    // empty: [ [], 0 ],
    // one_zero: [ [ 0 ], 1 ],
    // one_nan: [ [ NaN ], 1 ],
    // asc_6: [ [ 0, 1, 2, 3, 4, 5 ], 1 ],
    // desc_6: [ [ 5, 4, 3, 2, 1, 0 ], 1 ],
    // misc: [ [ false, 101, 102, 103, 104 ], 3 ],
    // misc2: [ [ 1, 2, NaN, 4, 5 ], 1 ],
    upTo5: [ [ '0', '01', '012', '0123', '01234' ], 5 ],
    tx_nums: [ [ '244', '200', '306', '400', '150', '220', '190', '495' ], 3 ],
    tx_strs: [ 'comprehend how it\'s driven by animal spirits'.split(' '), 10 ],
    dates: [ [ '2022-01-31', '2022-02-28', '2022-03-31', '2022-06-30', '2022-09-30', '2022-12-31' ], 10 ],
    words: [ [ 'Alexander the Great', 'Caesar', 'Putin', 'Hannibal', 'Farnese', 'Charles', 'Frederick', 'Napoleon' ], 14 ],
    tx_padded: [ [ '  8', ' 32', ' 64', '108', '0', '-8', '-24', '-36', 'digit', 'bit', '~~~', '-', '' ], 5 ],
  },
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
    dev: vec => (new FluoAlpha(vec.length)).project(vec, PRES),
    fut: (vec, wd) => (new FluoBeta(wd)).project(vec.slice(), PRES),
    cra: (vec, wd) => fluoGamma.project(vec, wd),
    rea: vec => fluoVector(vec, CONFIGS),
  }
})

lapse |> console.log
// result |> console.log
// result.cell('tx_padded', 'dev') |> console.log
result.cell('tx_padded', 'dev') |> decoPale |> console.log
result.cell('words', 'dev') |> decoPale |> console.log
result.cell('tx_padded', 'fut') |> decoPale |> console.log
result.cell('words', 'fut') |> decoPale |> console.log
result.cell('tx_padded', 'cra') |> decoPale |> console.log
result.cell('words', 'cra') |> decoPale |> console.log
result.cell('tx_padded', 'rea') |> decoPale |> console.log
result.cell('words', 'rea') |> decoPale |> console.log
// lapse |> DecoCrostab({ presets: [] }) |> console.log
// result |> DecoCrostab({ presets: [] }) |> console.log