import { ymdToInt } from '@valjoux/convert'

/**
 *
 * @param {[number,number,number]} ymd
 * @param {[number,number,number]} lo
 * @param {[number,number,number]} hi
 * @returns {boolean|boolean}
 */
export const within = (ymd, lo, hi) =>
  ymdToInt(lo) <= (ymd = ymdToInt(ymd)) && ymd <= ymdToInt(hi)
