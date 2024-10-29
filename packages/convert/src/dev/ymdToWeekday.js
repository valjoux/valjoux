import { dateToYmd } from '../index'
import { logger }    from '@spare/logger'
import { shiftYear } from '@valjoux/date-shift'

export const ymdToWeekday = ([y, m, d]) => {
  const c = ~~(y / 100)
  y = y % 100
  // m 月份, 只能取3-14, 也就是说如果1或2月, 要算作去年的13月和14月, 此处未优化
  let wd = (c / 4 - 2 * c + y + y / 4 + 13 * (m + 1) / 5 + d - 1) % 7
  return ~~wd
}

let today = dateToYmd(new Date())
today = shiftYear(today, 1)
logger(ymdToWeekday(today))
