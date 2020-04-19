import { dashToYmd, ymdToDash } from '@valjoux/convert'
import {
  shiftDay as shiftD,
  shiftMonth as shiftM,
  shiftQuarter as shiftQ,
  shiftYear as shiftY
}                               from '@valjoux/date-shift'

export const shiftDay = (dashed, dif) => shiftD(dashToYmd(dashed), dif) |> ymdToDash
export const shiftMonth = (dashed, dif) => shiftM(dashToYmd(dashed), dif)|> ymdToDash
export const shiftQuarter = (dashed, dif) => shiftQ(dashToYmd(dashed), dif)|> ymdToDash
export const shiftYear = (dashed, dif) => shiftY(dashToYmd(dashed), dif)|> ymdToDash
