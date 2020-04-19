import { bitDay, bitMonth, bitYear, readDay, readMonth, readYear } from '@valjoux/util-bitwise'
import { dashify }                                                 from './utils/dashify'

export const dateToDate = date => new Date(date.getFullYear(), date.getMonth(), date.getDate())
export const dashToDate = dash => new Date(+dash.slice(0, 4), +dash.slice(5, 7) - 1, +dash.slice(8, 10))
export const intToDate = int => new Date(readYear(int), readMonth(int) - 1, readDay(int))
export const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2])

export const dateToDash = (date, de = '-') => dashify(date.getFullYear(), date.getMonth() + 1, date.getDate(), de)
export const dashToDash = (dash, de = '-') => dashify(+dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10), de)
export const intToDash = (int, de = '-') => dashify(readYear(int), readMonth(int), readDay(int), de)
export const ymdToDash = (ymd, de = '-') => dashify(ymd[0], ymd[1], ymd[2], de)

export const dateToInt = date => bitYear(date.getFullYear()) + bitMonth(date.getMonth() + 1) + bitDay(date.getDate())
export const dashToInt = dash => bitYear(+dash.slice(0, 4)) + bitMonth(+dash.slice(5, 7)) + bitDay(+dash.slice(8, 10))
export const intToInt = int => bitYear(int >> 9) + bitMonth(int >> 5) + bitDay(int >> 0)
export const ymdToInt = ymd => bitYear(ymd[0]) + bitMonth(ymd[1]) + bitDay(ymd[2])

export const dateToYmd = date => [date.getFullYear(), date.getMonth() + 1, date.getDate()]
export const dashToYmd = dash => [+dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10)]
export const intToYmd = int => [readYear(int), readMonth(int), readDay(int)]
export const ymdToYmd = ymd => [+ymd[0], +ymd[1], +ymd[2]]
