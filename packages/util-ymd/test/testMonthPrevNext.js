import { monthToNext, monthToPrev } from '../src.js'
import { delogger, says } from '@spare/logger'

const ymd = [2020, 5, 15]

for (let i = 1; i <= 12; i++)
  monthToNext(ymd) |> says[`month ${i}`]

for (let i = 12; i >= 1; i--)
  monthToPrev(ymd) |> says[`month ${i}`]
