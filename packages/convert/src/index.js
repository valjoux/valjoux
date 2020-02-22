import { joinYMD } from './utils/parseYMD'
import { bitDay, bitMonth, bitYear, readDay, readMonth, readYear } from '@valjoux/util-bitwise'

export const dateToDate = date => new Date(date.getFullYear(), date.getMonth(), date.getDate())
export const dashToDate = dst => new Date(+dst.slice(0, 4), +dst.slice(5, 7) - 1, +dst.slice(8, 10))
export const intToDate = int => new Date(readYear(int), readMonth(int) - 1, readDay(int))
export const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2])

export const dateToDash = (date, de = '-') => joinYMD(date.getFullYear(), date.getMonth() + 1, date.getDate(), de)
export const dashToDash = (dst, de = '-') => joinYMD(+dst.slice(0, 4), +dst.slice(5, 7), +dst.slice(8, 10), de)
export const intToDash = (int, de = '-') => joinYMD(readYear(int), readMonth(int), readDay(int), de)
export const ymdToDash = (ymd, de = '-') => joinYMD(ymd[0], ymd[1], ymd[2], de)

export const dateToInt = date => bitYear(date.getFullYear()) + bitMonth(date.getMonth() + 1) + bitDay(date.getDate())
export const dashToInt = dst => bitYear(+dst.slice(0, 4)) + bitMonth(+dst.slice(5, 7)) + bitDay(+dst.slice(8, 10))
export const intToInt = int => bitYear(int >> 9) + bitMonth(int >> 5) + bitDay(int >> 0)
export const ymdToInt = ymd => bitYear(ymd[0]) + bitMonth(ymd[1]) + bitDay(ymd[2])

export const dateToYmd = date => [date.getFullYear(), date.getMonth() + 1, date.getDate()]
export const dashToYmd = dst => [+dst.slice(0, 4), +dst.slice(5, 7), +dst.slice(8, 10)]
export const intToYmd = int => [readYear(int), readMonth(int), readDay(int)]
export const ymdToYmd = ymd => [+ymd[0], +ymd[1], +ymd[2]]
