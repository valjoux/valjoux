import { Xr, says } from '@spare/logger'
import { ymdToInt } from '@valjoux/convert'
import { forwardDays } from '../src/forwardDays'
import { backwardDays } from '../src/backwardDays'

const YMD = 'ymd', INT = 'int', SHIFT = 'shift', RESULT = 'result'
let ymd, int, dif

Xr()[YMD](ymd = [2020, 2, 21])[INT](int = ymdToInt(ymd))[SHIFT](dif = +30)[RESULT](forwardDays(int, dif)) |> says.forward
Xr()[YMD](ymd = [2020, 2, 27])[INT](int = ymdToInt(ymd))[SHIFT](dif = +365 * 3)[RESULT](forwardDays(int, dif)) |> says.forward
Xr()[YMD](ymd = [2020, 2, 29])[INT](int = ymdToInt(ymd))[SHIFT](dif = +3)[RESULT](forwardDays(int, dif)) |> says.forward

Xr()[YMD](ymd = [2020, 2, 21])[INT](int = ymdToInt(ymd))[SHIFT](dif = -30)[RESULT](backwardDays(int, dif)) |> says.backward
Xr()[YMD](ymd = [2021, 1, 1])[INT](int = ymdToInt(ymd))[SHIFT](dif = -365)[RESULT](backwardDays(int, dif)) |> says.backward
Xr()[YMD](ymd = [2020, 3, 1])[INT](int = ymdToInt(ymd))[SHIFT](dif = -3)[RESULT](backwardDays(int, dif)) |> says.backward
