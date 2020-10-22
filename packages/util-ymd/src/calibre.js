import { monthDays } from '@valjoux/util-month-days'

export const calibre = (ymd) => {
  const max = monthDays(ymd[0], ymd[1])
  if (ymd[2] > max) ymd[2] = max
  return ymd
}


