import { isLeap }   from '@valjoux/util-leap-year'
import { bigMonth } from './bigMonth.js'

/**
 *
 * @param {*} [y]
 * @param {*} m
 * @param {boolean} [islp]
 * @returns {*}
 */
export const monthDays = (y, m, islp) =>
  m === 0x2
    ? 28 + (islp ?? isLeap(y))
    : 30 + bigMonth(m)
