import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'
import {
  dashToDash,
  dashToDate,
  dashToInt,
  dashToYmd,
  dateToDash,
  dateToDate,
  dateToInt,
  dateToYmd,
  intToDash,
  intToDate,
  intToInt,
  intToYmd,
  ymdToDash,
  ymdToDate,
  ymdToInt,
  ymdToYmd
}                            from '../src.js'

export class ConvertStrategies {
  static testDashToSome () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: { simple: [new Date() |> dateToDash], },
      methods: { bench: dash => dash.split('-'), dashToDash, dashToDate, dashToInt, dashToYmd, }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
  static testDateToSome () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: { simple: [new Date()], },
      methods: { bench: date => date.toLocaleString(), dateToDash, dateToDate, dateToInt, dateToYmd, }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
  static testIntToSome () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: { simple: [new Date() |> dateToInt], },
      methods: { bench: int => int >> 9 & 0xffff, intToDash, intToDate, intToInt, intToYmd, }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
  static testYmdToSome () {
    const { lapse, result } = strategies({
      repeat: 1E+6,
      candidates: { simple: [new Date() |> dateToYmd], },
      methods: { bench: ymd => ymd.map(x => x), ymdToDash, ymdToDate, ymdToInt, ymdToYmd }

    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
}

ConvertStrategies.testDashToSome()
ConvertStrategies.testDateToSome()
ConvertStrategies.testIntToSome()
ConvertStrategies.testYmdToSome()



