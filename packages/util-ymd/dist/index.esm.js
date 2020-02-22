import { isLeap } from '@valjoux/util-leap-year';

const prevMonth = ym => ym[1] <= 1 ? (ym[1] = 12, ym[0]--, ym) : (ym[1]--, ym);
const nextMonth = ym => ym[1] >= 12 ? (ym[1] = 1, ym[0]++, ym) : (ym[1]++, ym);

/**
 *
 * @param {[number,number]} ym
 * @param {boolean} [islp]
 * @returns {*}
 */

const monthDays = (ym, islp) => {
  const m = ym[1];
  return m === 0x2 ? 28 + (islp !== null && islp !== void 0 ? islp : isLeap(ym[0])) : 30 + m % 0x2 ^ m >= 0x8;
};

const calibre = ymd => {
  const max = monthDays(ymd);
  if (ymd[2] > max) ymd[2] = max;
  return ymd;
};

export { calibre, monthDays, nextMonth, prevMonth };
