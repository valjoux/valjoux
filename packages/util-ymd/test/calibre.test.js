import { logger, xr } from '@spare/logger'
import { calibre } from '../src/calibre'

for (let y = 2020, m = 2, d = 29, ymd; m < 12; m++) {
  xr()['ymd'](ymd = [y, m, d]).calibre(calibre(ymd, 30)) |> logger
}
