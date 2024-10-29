import { dashToYmd, ymdToDash } from '@valjoux/convert'
import {
  shiftDay as shiftD,
  shiftMonth as shiftM,
  shiftQuarter as shiftQ,
  shiftYear as shiftY
}                               from '@valjoux/date-shift'

export const shiftDay = (dashed, dif) => ymdToDash(shiftD(dashToYmd(dashed), dif))
export const shiftMonth = (dashed, dif) => ymdToDash(shiftM(dashToYmd(dashed), dif))
export const shiftQuarter = (dashed, dif) => ymdToDash(shiftQ(dashToYmd(dashed), dif))
export const shiftYear = (dashed, dif) => ymdToDash(shiftY(dashToYmd(dashed), dif))
