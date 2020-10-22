import { shiftDay, shiftMonth, shiftYear } from '@valjoux/date-shift'
import { xr, says, deco } from '@spare/logger'
import { dateToYmd } from '@valjoux/util-bitwise'
import { intToYmd, ymdToInt } from '../src'

// const { dateToYmd, ymdToDate, dashToYmd, ymdToDash, bitYear, bitMonth, bitDay, monthLoHi, seasonLoHi } = Y4MD
const RN = '\n'
const YMD = 'ymd', INT = 'int', HEX = 'hex'

export class YmdToIntTest {
  static test () {
    let date = new Date(), ymd = date |> dateToYmd, int
    // date-shift = [2000, 2, 28]
    for (let i = 0; i < 100; i++) {
      xr()
        [YMD]((ymd = shiftDay(ymd, 1)) |> deco)
        [INT](int = ymd |> ymdToInt)
        [HEX](int.toString(16))
        [YMD]((ymd = int |> intToYmd) |> deco)
        |> says[YMD + ':' + String(i).padStart(3)]
    }
  }
}

YmdToIntTest.test()

