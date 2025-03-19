import { isLeap } from '@valjoux/util-leap-year';

const bigMonth = m => m % 2 ^ m >= 8;

/**
 *
 * @param {*} [y]
 * @param {*} m
 * @param {boolean} [islp]
 * @returns {*}
 */
const monthDays = (y, m, islp) =>
  m === 0x2
    ? 28 + (islp ?? isLeap(y))
    : 30 + bigMonth(m);

const seasonLast = m => ~~((m - 1) / 3 + 1) * 3;

const monthToSeason = m => ~~((m - 1) / 3 + 1);

export { bigMonth, monthDays, monthToSeason, seasonLast };
