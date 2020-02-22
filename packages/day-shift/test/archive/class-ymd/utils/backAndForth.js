import { isLeap } from './isLeap'
import { mtail } from './calibre'

export const windDayForth = ymd => {
  while (ymd[2] > mtail(ymd)) {
    ymd[2] -= mtail(ymd)
    windMonthForth(ymd)
  }
  return ymd
}

export const windDayBack = ymd => {
  ymd.cap = 0
  while (ymd[2] < mtail(ymd)) {
    windMonthBack(ymd)
    ymd[2] += mtail(ymd)
  }
  return windDayForth(ymd)
}

export const windMonthForth = ymd => {
  ymd[1]++
  if (ymd[1] > 12) ymd[0]++, ymd[1] = 1
  return ymd
}
export const windMonthBack = ymd => {
  ymd[1]--
  if (ymd[1] < 1) ymd[0]--, ymd[1] = 12
  return ymd
}

export const windYearForth = ymd => {
  while (ymd[2] >= 365) {
    ymd[2] -= 365
    if (ymd[1] <= 2 && isLeap(ymd[0]++) || ymd[1] > 2 && isLeap(++ymd[0])) ymd[2]--
  }
  return ymd
}

export const windYearBack = ymd => {
  while (ymd[2] <= -365) {
    ymd[2] += 365
    if (ymd[1] <= 2 && isLeap(--ymd[0]) || ymd[1] > 2 && isLeap(ymd[0]--)) ymd[2]++
  }
  return ymd
}


