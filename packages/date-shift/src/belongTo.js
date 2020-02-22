import { ymdToInt } from '@valjoux/convert'

export const belongTo = (ymd, lo, hi) =>
  ymdToInt(lo) <= (ymd = ymdToInt(ymd)) && ymd <= ymdToInt(hi)
