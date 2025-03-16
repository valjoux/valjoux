import { DA }                from '@texting/enum-chars'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import { dashify }           from '../../src/utils/dashify.js'

const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    constantinopleFall: [1453, 5, 29],
    decInd: [1776, 7, 4],
    tang: [618, 6, 18],
  },
  methods: {
    bench: x => x,
    dev: dashify,
    edge: (y, m, d) => String(y).padStart(4, '0') + DA + String(m).padStart(2, '0') + DA + String(d).padStart(2, '0'),
    easy: (y, m, d) => y + DA + m + DA + d,
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
