import { Chrono } from 'elprimero'
import { decoCrostab, logger, says, xr } from '@spare/logger'

// if (year is not divisible by 4) then (it is a common year)
// else if (year is not divisible by 100) then (it is a leap year)
// else if (year is not divisible by 400) then (it is a common year)
// else (it is a leap year)

class LeapYearTest {
  static testLeapYear () {
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+7,
      paramsList: {
        y1500: [1500],
        y1600: [1600],
        y1700: [1700],
        y1800: [1800],
        y1900: [1900],
        y2000: [2000],
        y2016: [2016],
        y2019: [2019],
        y2100: [2100],
      },
      funcList: {
        stable: y => {
          if (!(y % 4)) {
            if (!(y % 100)) return !(y % 400)
            return true
          }
          return false
        },
        dev: y => !(y % 4 || !(y % 100)) || !(y % 400),
        fut: y => !(y % 4) && !!(y % 100) || !(y % 400),
        edge: y => !(y = y % 400) || !!(y = y % 25) && !(y % 4)
      }
    })
    lapse |> decoCrostab |> says.lapse
    result |> decoCrostab |> says.result
  }
}

LeapYearTest.testLeapYear()

const stb2 = y => {
  let x = y
  xr()
    ['!(x % 400)'](!(x = x % 400))
    ['x'](x)
    ['!(x % 4)'](!(x = x % 4))
    ['x'](x)
    ['!!(x % 25)'](!!(x % 25)) |>  says[x]
  return !(y = y % 400) || !!(y = y % 25) && !(y % 4)
}

stb2(2016) |> logger

