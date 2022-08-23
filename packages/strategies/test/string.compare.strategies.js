import { makeEmbedded } from '@foba/util'
import { decoCrostab }  from '@spare/logger'
import { says }         from '@spare/xr'
import { splitLiteral } from '@texting/splitter'
import { isLiteral }    from '@typen/literal'
import { strategies }   from '../src/strategies'

/** @type {function} */
const compare = Function.prototype.call.bind(String.prototype.localeCompare)

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    letter: [ 'a', 'b', 'c', 'd' ],
    book: splitLiteral('Sharifian, Farzad - Cultural Linguistics Cultural Conceptualisations and Language').filter(isLiteral),
    // simple: [ [ 1, 2, 3 ], 3 ],
    // exponential: [ [ 1E+0, 1E+1, 1E+2, 1E+3, 1E+4, 1E+5 ], 6 ],
  } |> makeEmbedded,
  methods: {
    bench: vec => (vec.forEach(x => x), vec.at(-1)),
    native: vec => {
      let min = null, max = null
      for (let i = 0, l = vec.length; i < l; i++) {
        const str = vec[i]
        !min || !max
          ? (min = str, max = str)
          : str < min ? (min = str) : str > max ? (max = str) : void 0
      }
      return `[min] (${min}) [max] (${max})`
    },
    locale: vec => {
      let min = null, max = null
      for (let i = 0, l = vec.length; i < l; i++) {
        const str = vec[i]
        !min || !max
          ? (min = str, max = str)
          : str.localeCompare(min) < 0 ? (min = str) : str.localeCompare(max) > 0 ? (max = str) : void 0
      }
      return `[min] (${min}) [max] (${max})`
    },
    compare: vec => {
      let min = null, max = null
      for (let i = 0, l = vec.length; i < l; i++) {
        const str = vec[i]
        !min || !max
          ? (min = str, max = str)
          : compare(str, min) < 0 ? (min = str) : compare(str, max) > 0 ? (max = str) : void 0
      }
      return `[min] (${min}) [max] (${max})`
    }
  }
})

lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
