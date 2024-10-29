import { dateToYmd } from '@valjoux/convert'
import { delogger, xr } from '@spare/logger'
import { monthLoHi, seasonLoHi } from '../src/takePeriod'

function testLoHi () {
  const ymd = new Date()|> dateToYmd
  xr()
  'monthBeginAndEnd' |> delogger
  monthLoHi(ymd)  |> delogger
  'seasonBeginAndEnd' |> delogger
  seasonLoHi(ymd)  |> delogger
}

testLoHi()
