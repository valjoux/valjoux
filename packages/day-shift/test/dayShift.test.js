import { xr, says, deco } from '@spare/logger'
import { forwardDays } from '../src/forwardDays'
import { backwardDays } from '../src/backwardDays'

const
  ORIGINAL = 'original',
  FORWARD = 'forward',
  BACKWARD = 'backward',
  DAYS = 'days'

export class DayShiftTest {
  static testBackward () {
    const dates = [
      { ymd: [2020, 2, 29], dif: -29 },
      { ymd: [2020, 2, 29], dif: -365 },
      { ymd: [2020, 2, 29], dif: -60 },
    ]
    for (let { ymd, dif } of dates)
      xr()[ORIGINAL](ymd |> deco)[DAYS](dif).result((backwardDays(ymd, dif)) |> deco) |> says[BACKWARD]
  }

  static testForward () {
    const dates = [
      { ymd: [2020, 2, 1], dif: 29 },
      { ymd: [2020, 2, 1], dif: 365 },
      { ymd: [2020, 2, 1], dif: 60 },
    ]
    for (let { ymd, dif } of dates)
      xr()[ORIGINAL](ymd |> deco)[DAYS](dif).result((forwardDays(ymd, dif)) |> deco) |> says[FORWARD]
  }
}

DayShiftTest.testBackward()

DayShiftTest.testForward()

