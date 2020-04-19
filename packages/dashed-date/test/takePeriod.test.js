import { deco, says, xr }                                                from '@spare/logger'
import { dateToDash }                                                    from '@valjoux/convert'
import { monthHi, monthLo, seasonEnds, seasonHi, seasonLo, toYearMonth } from '../src/takePeriod'
import { year }                                                          from '../src/utils/readParts'

const LO = 'lo', HI = 'hi'
function test () {
  const dt = new Date()|> dateToDash
  xr().date(dt)['toYearMonth'](toYearMonth(dt)) |> says['now']
  xr()[LO](monthLo(dt))[HI](monthHi(dt)) |> says['month begin and end']
  xr()[LO](seasonLo(dt))[HI](seasonHi(dt))  |> says['season begin and end']
  xr().p(seasonEnds(year(dt)) |> deco) |> says['season ends from year']

}

test()
