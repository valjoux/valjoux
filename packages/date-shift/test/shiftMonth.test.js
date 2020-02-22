import { Xr, says } from '@spare/logger'
import { ymdToInt } from '@valjoux/convert'
import { shiftMonth } from '../src/ymd'

const YMD = 'ymd', INT = 'int', SHIFT = 'shift', RESULT = 'result'
let ymd, int, dif

Xr()[YMD](ymd = [2020, 2, 29])[INT](int = ymdToInt(ymd))[SHIFT](dif = +3)[RESULT](shiftMonth(int, dif)) |> says.forward
Xr()[YMD](ymd = [2021, 1, 1])[INT](int = ymdToInt(ymd))[SHIFT](dif = -3)[RESULT](shiftMonth(int, dif)) |> says.backward
Xr()[YMD](ymd = [2020, 2, 21])[INT](int = ymdToInt(ymd))[SHIFT](dif = +12)[RESULT](shiftMonth(int, dif)) |> says.forward
Xr()[YMD](ymd = [2020, 2, 21])[INT](int = ymdToInt(ymd))[SHIFT](dif = -12)[RESULT](shiftMonth(int, dif)) |> says.backward
