import { monthEnd, monthToNext } from '../src.js'
import { logger, xr } from '@spare/logger'

let ymd = [2023, 12, 20]

for (let i = 0; i < 20; i++) {
  xr().ymd(ymd = ymd |> monthToNext).monthEnd(ymd |> monthEnd) |> logger
}
