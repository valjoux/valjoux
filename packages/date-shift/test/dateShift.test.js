import { delogger, xr, says, deco } from '@spare/logger'
import { dashToDate, dashToYmd, dateToDash, dateToYmd, ymdToDash, ymdToDate } from '@valjoux/convert'
import { monthLoHi, seasonLoHi, shiftDay, shiftMonth, shiftYear, belongTo, shiftQuarter } from '../src/ymd'

const RN = '\n'

export class Y4MDTest {
  static test () {
    let date = new Date(), date2, ymd
    ymd = date|> dateToYmd, date2 = ymd |> ymdToDate

    // xr().p(RN)
    //   ['date'](date.toLocaleDateString()).p(RN)
    //   ['shiftDay']((ymd = shiftDay(ymd, -1)) |> deco).p(RN)
    //   ['shiftDay']((ymd = shiftMonth(ymd, -1)) |> deco).p(RN)
    //   ['shiftQuarter']((ymd = shiftQuarter(ymd, -3)) |> deco).p(RN)
    //   ['shiftDay']((ymd = shiftYear(ymd, -1)) |> deco).p(RN)
    //   |> says['shift']

    xr()['original'](ymd |> deco) |> says['shift']
    xr()['shiftDay']((ymd = shiftDay(ymd, -1)) |> deco) |> says['shift']
    xr()['shiftDay']((ymd = shiftDay(ymd, +2)) |> deco) |> says['shift']
    xr()['shiftMonth']((ymd = shiftMonth(ymd, -1)) |> deco) |> says['shift']
    xr()['shiftQuarter']((ymd = shiftQuarter(ymd, -3)) |> deco) |> says['shift']
    xr()['shiftYear']((ymd = shiftYear(ymd, -1)) |> deco) |> says['shift']
  }

  static testLoHi () {
    const ymd = new Date()|> dateToYmd
    xr()
    'monthBeginAndEnd' |> delogger
    monthLoHi(ymd)  |> delogger
    'seasonBeginAndEnd' |> delogger
    seasonLoHi(ymd)  |> delogger
  }

  static belongToTest () {
    const lo = [2019, 12, 31]
    const dt = [2020, 5, 1]
    const hi = [2021, 1, 1]
    const result = belongTo(dt, lo, hi)
    xr()['check if'](dt).p('belongTo')['lo'](lo)['hi'](hi).result(belongTo(dt, lo, hi)) |> says.belongTo
    result |> delogger
  }
}

Y4MDTest.test()
Y4MDTest.belongToTest()

