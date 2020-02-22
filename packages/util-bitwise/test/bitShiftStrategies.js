import { Chrono } from 'elprimero'
import { decoCrostab, says } from '@spare/logger'
import { dateToInt, dateToYmd, ymdToInt } from '@valjoux/convert'
import {
  readDay, readMonth, readYear,
  bitYear, bitDay, bitMonth,
} from '../src/bitShifter'

export class BitShiftStrategies {
  static testReader () {
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+7,
      paramsList: {
        simple: [new Date() |> dateToInt],
        another: [[2077, 12, 31] |> ymdToInt]
      },
      funcList: {
        bench: int => int >> 9 & 0xffff,
        readYear,
        readMonth,
        readDay,
        readYearMonth: int => [(int = int >> 5) >> 4 & 0xffff, int & 0xf]
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
  static testBitShift () {
    const { lapse, result } = Chrono.strategies({
      repeat: 4E+6,
      paramsList: { simple: [new Date() |> dateToYmd], another: [[2077, 12, 31]] },
      funcList: {
        bench: ymd => ymd.map(x => x),
        bitYear: ([y]) => bitYear(y),
        bitMonth: ([, m]) => bitMonth(m),
        bitDay: ([, , d]) => bitDay(d),
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
}

BitShiftStrategies.testReader()
BitShiftStrategies.testBitShift()



