import { monthDays } from './monthDays'

export const calibre = (ymd) => {
  const max = monthDays(ymd)
  if (ymd[2] > max) ymd[2] = max
  return ymd
}


