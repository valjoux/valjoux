import { isLeap } from '@valjoux/util-leap-year'

/**
 *
 * @param {[number,number]} ym
 * @param {boolean} [islp]
 * @returns {*}
 */
export const monthDays = (ym, islp) => {
  const m = ym[1]
  return m === 0x2
    ? 28 + (islp ?? isLeap(ym[0]))
    : 30 + m % 0x2 ^ m >= 0x8
}
