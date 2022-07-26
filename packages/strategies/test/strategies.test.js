import { decoCrostab, says } from '@spare/logger'
import { iterate }           from '@vect/vector-mapper'
import { strategies }        from '../src/strategies'

const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    empty: [ [], 0 ],
    simple: [ [ 1, 2, 3 ], 3 ],
    exponential: [ [ 1E+0, 1E+1, 1E+2, 1E+3, 1E+4, 1E+5 ], 6 ],
  },
  methods: {
    bench: v => (v.forEach(x => x), v),
    iterate: (v, l) => {
      const o = { a: 0 }
      iterate.call(o, v, function (x) { this.a += x}, l)
      return o.a
    },
    native: v => {
      let a = 0
      for (let i = 0, l = v.length; i < l; i++) a += v[i]
      return a
    },
    reduce: v => v.reduce((a, b) => a + b, 0),
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
