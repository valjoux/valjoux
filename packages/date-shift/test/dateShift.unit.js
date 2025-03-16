import { xr, says, deco } from '@spare/logger'
import { shiftDay, shiftMonth, shiftYear, shiftQuarter } from '../src/shifters.js'

const RN = '\n'

const
  ORIGINAL = 'original',
  SHIFT = 'shift',
  DAYS = 'days',
  MONTHS = 'months',
  QUARTER = 'quarter',
  YEAR = 'year'

export class DateShiftTest {
  static test () {
    let date = new Date()
    // let ymd = date|> dateToYmd
    let ymd = [2020, 3, 1]
    let dif = -1
    xr()[ORIGINAL](ymd |> deco) |> says[SHIFT]
    xr()[DAYS](dif).result((shiftDay(ymd, dif)) |> deco) |> says[SHIFT]
    xr()[MONTHS](dif).result((shiftMonth(ymd, dif)) |> deco) |> says[SHIFT]
    xr()[QUARTER](dif).result((shiftQuarter(ymd, dif)) |> deco) |> says[SHIFT]
    xr()[YEAR](dif).result((shiftYear(ymd, dif)) |> deco) |> says[SHIFT]
  }
}

DateShiftTest.test()

