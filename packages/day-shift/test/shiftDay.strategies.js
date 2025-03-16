import { decoCrostab, says } from '@spare/logger'
import { ymdToInt }          from '@valjoux/convert'
import { shiftDay }          from '@valjoux/date-shift'
import { strategies }        from '@valjoux/strategies'
import { backwardDays }      from '../src/backwardDays.js'
import { forwardDays }       from '../src/forwardDays.js'
import { YMD }               from './archive/class-day-shift/class-ymd.js'
import { intDayShift }       from './archive/int-day-shift.js'

const ymdDayShift = (ymd, dif) => {
  if (dif > 0) return forwardDays(ymd, dif)
  if (dif < 0) return backwardDays(ymd, dif)
  return ymd
}

const { lapse, result } = strategies({
  repeat: 2E+6,
  candidates: {
    positiveDays: [[2020, 2, 1], 29],
    negativeDays: [[2020, 3, 1], -29],
    positiveMonths: [[2020, 2, 1], 90],
    negativeMonths: [[2020, 3, 1], -90],
    positiveYears: [[2020, 2, 1], 395],
    negativeYears: [[2020, 3, 1], -395],
  },
  methods: {
    bench: ([y, m, d], dif) => [y, m, d, dif],
    // elprimero: (ymd, dif) => Y4MD.addD(ymd, dif),
    class: (ymd, dif) => YMD.of.apply(null, ymd).dayShift(dif).toYmd(),
    int: (ymd, dif) => intDayShift(ymdToInt(ymd), dif),
    fut: ymdDayShift,
    edge: shiftDay,
  }
})
lapse |> decoCrostab |> says.lapse
result |> decoCrostab |> says.result
