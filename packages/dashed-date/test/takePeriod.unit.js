import { deco, says, xr }                                                      from '@spare/logger'
import { dateToDash }                                                          from '@valjoux/convert'
import { day, month, year }                                                    from '..'
import { monthHi, monthLo, season, seasonEnds, seasonHi, seasonLo, yearMonth } from '../src/takePeriod'

const LO = 'lo', HI = 'hi'
function test () {
  const dt = new Date()|> dateToDash
  xr().date(dt)['m'](month(dt))['d'](day(dt))['yearMonth'](yearMonth(dt))['season'](season(dt))|> says['now']
  xr()[LO](monthLo(dt))[HI](monthHi(dt)) |> says['month begin and end']
  xr()[LO](seasonLo(dt))[HI](seasonHi(dt))  |> says['season begin and end']
  xr().p(seasonEnds(year(dt)) |> deco) |> says['season ends from year']

}

test()
