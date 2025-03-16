import { randLongStr }           from '@aryth/rand'
import { decoCrostab, says, xr } from '@spare/logger'
import { dashToInt, dashToYmd }  from '@valjoux/convert'
import { within as withinYmd }   from '@valjoux/date-shift'
import { strategies }            from '@valjoux/strategies'
import { within }                from '../src/withinPeriod.js'

function withinTest () {
  const lo = [2019, 12, 31]
  const dt = [2020, 5, 1]
  const hi = [2021, 1, 1]
  const result = within(dt, lo, hi)
  xr()['check if'](dt).p('belongTo')['lo'](lo)['hi'](hi).result(result) |> says.within
}
const randDate = () => randLongStr(4) + '-' + randLongStr(2) + '-' + randLongStr(2)
const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    alpha: ['1988-12-07', '1980-01-01', '1990-01-01'],
    beta: ['2019-12-31', '2020-05-01', '2021-01-01'],
    gamma: ['2025-05-31', '2025-05-31', '2025-09-01'],
    delta: ['2025-08-30', '2025-05-31', '2025-09-01'],
    rand: [randDate(), '0999-99-99', '5000-01-01']
  },
  methods: {
    bench: x => x,
    ymd: (dt, lo, hi) => withinYmd(dt |> dashToYmd, lo |> dashToYmd, hi |> dashToYmd),
    dev: (dt, lo, hi) => (lo.localeCompare(dt) <= 0) && (dt.localeCompare(hi) <= 0),
    fut: (dt, lo, hi) => (String.prototype.localeCompare.call(lo, dt) <= 0) && (String.prototype.localeCompare.call(dt, hi) <= 0),
    edge: (dt, lo, hi) => (lo|> dashToInt) <= (dt = (dt|> dashToInt)) && dt <= (hi|> dashToInt),
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']

