import { ymdToInt } from '@valjoux/convert';
import { min } from '@aryth/comparer';
import { forwardDays, backwardDays } from '@valjoux/day-shift';
import { monthDays, seasonLast } from '@valjoux/util-month-days';
import { acquire } from '@vect/vector-merge';

/**
 *
 * @param {[number,number,number]} ymd
 * @param {[number,number,number]} lo
 * @param {[number,number,number]} hi
 * @returns {boolean|boolean}
 */
const within = (ymd, lo, hi) =>
  ymdToInt(lo) <= (ymd = ymdToInt(ymd)) && ymd <= ymdToInt(hi);

const shiftDay = (ymd, days) => {
  if (days > 0) return forwardDays(ymd, days)
  if (days < 0) return backwardDays(ymd, days)
  return ymd
};

const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd, isEnd = d >= monthDays(ymd[0], ymd[1]), dy;
  dy = ~~((m += dif) / 12), m %= 12, y += dy;
  if (m < 1) (y--, m += 12);
  ymd[0] = y , ymd[1] = m , ymd[2] = isEnd ? monthDays(y, m) : min(d, monthDays(y, m));
  return ymd
};

const shiftYear = (ymd, dif) => {
  let [y, m, d] = ymd, isEnd = d >= monthDays(y, m);
  ymd[0] += dif, ymd[2] = isEnd ? monthDays(y, m) : min(d, monthDays(y, m));
  return ymd
};

const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3);

const seasonLo = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m);
  return [y, hi - 2, 1]
};

const seasonHi = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m);
  return [y, hi, monthDays(y, hi)]
};

const seasonLoHi = (ymd) => {
  const [y, m] = ymd, hi = seasonLast(m);
  return [[y, hi - 2, 1], [y, hi, monthDays(y, hi)]]
};

const monthLo = (ymd) => acquire(ymd.slice(0, 2), 1);

const monthHi = (ymd) => acquire(ymd.slice(0, 2), monthDays.apply(null, ymd));

const monthLoHi = (ymd) => {
  const [y, m] = ymd;
  return [[y, m, 1], [y, m, monthDays(y, m)]]
};

export { monthHi, monthLo, monthLoHi, seasonHi, seasonLo, seasonLoHi, shiftDay, shiftMonth, shiftQuarter, shiftYear, within };
