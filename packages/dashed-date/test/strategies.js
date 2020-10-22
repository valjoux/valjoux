import { min }                         from '@aryth/comparer'
import { decoCrostab, says }           from '@spare/logger'
import { dashify, dashToYmd }          from '@valjoux/convert'
import { shiftMonth as shiftMonthYmd } from '@valjoux/date-shift'
import { strategies }                  from '@valjoux/strategies'
import { monthDays }                   from '@valjoux/util-month-days'
import { shiftMonth }                  from '../src/shiftPeriod'
import { day, month, year }            from '../src/utils/readParts'

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: [
    ['2020-02-29', +3],
    ['2020-02-29', -6],
    ['2021-01-01', -3],
    ['2020-02-21', +12],
    ['2020-02-21', -12],
  ],
  methods: {
    bench: x => x,
    ori: (date, dif) => shiftMonthYmd(date |> dashToYmd, dif),
    dev: shiftMonth,
    edge: (dashed, dif) => {
      let y = year(dashed), m = month(dashed), d = day(dashed)
      let isEnd = d >= monthDays(y, m), dy
      dy = ~~((m += dif) / 12), m %= 12, y += dy
      if (m < 1) (y--, m += 12)
      d = isEnd ? monthDays(y, m) : min(d, monthDays(y, m))
      return dashify(y, m, d)
    },
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
