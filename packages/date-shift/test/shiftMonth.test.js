import { Xr, says, deco } from '@spare/logger'
import { shiftMonth } from '../src/shifters'

const YMD = 'ymd', SHIFT = 'shift', RESULT = 'result'

const candidates = [
  { ymd: [2020, 2, 29], dif: +3 },
  { ymd: [2020, 2, 29], dif: -6 },
  { ymd: [2021, 1, 1], dif: -3 },
  { ymd: [2020, 2, 21], dif: +12 },
  { ymd: [2020, 2, 21], dif: -12 },
]

for (let { ymd, dif } of candidates) {
  Xr()
    [YMD](ymd |> deco)
    [SHIFT](dif)
    [RESULT](shiftMonth(ymd, dif) |> deco)
    |> says[dif >= 0 ? 'forward' : 'backward']
}
