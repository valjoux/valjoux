'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('@valjoux/convert');
var comparer = require('@aryth/comparer');
var dayShift = require('@valjoux/day-shift');
var utilMonthDays = require('@valjoux/util-month-days');
var vectorMerge = require('@vect/vector-merge');

/**
 *
 * @param {[number,number,number]} ymd
 * @param {[number,number,number]} lo
 * @param {[number,number,number]} hi
 * @returns {boolean|boolean}
 */

const within = (ymd, lo, hi) => convert.ymdToInt(lo) <= (ymd = convert.ymdToInt(ymd)) && ymd <= convert.ymdToInt(hi);

const shiftDay = (ymd, days) => {
  if (days > 0) return dayShift.forwardDays(ymd, days);
  if (days < 0) return dayShift.backwardDays(ymd, days);
  return ymd;
};
const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd,
      isEnd = d >= utilMonthDays.monthDays(ymd[0], ymd[1]),
      dy;
  dy = ~~((m += dif) / 12), m %= 12, y += dy;
  if (m < 1) y--, m += 12;
  ymd[0] = y, ymd[1] = m, ymd[2] = isEnd ? utilMonthDays.monthDays(y, m) : comparer.min(d, utilMonthDays.monthDays(y, m));
  return ymd;
};
const shiftYear = (ymd, dif) => {
  let [y, m, d] = ymd,
      isEnd = d >= utilMonthDays.monthDays(y, m);
  ymd[0] += dif, ymd[2] = isEnd ? utilMonthDays.monthDays(y, m) : comparer.min(d, utilMonthDays.monthDays(y, m));
  return ymd;
};
const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3);

const seasonLo = ymd => {
  const [y, m] = ymd,
        hi = utilMonthDays.seasonLast(m);
  return [y, hi - 2, 1];
};
const seasonHi = ymd => {
  const [y, m] = ymd,
        hi = utilMonthDays.seasonLast(m);
  return [y, hi, utilMonthDays.monthDays(y, hi)];
};
const seasonLoHi = ymd => {
  const [y, m] = ymd,
        hi = utilMonthDays.seasonLast(m);
  return [[y, hi - 2, 1], [y, hi, utilMonthDays.monthDays(y, hi)]];
};
const monthLo = ymd => vectorMerge.acquire(ymd.slice(0, 2), 1);
const monthHi = ymd => vectorMerge.acquire(ymd.slice(0, 2), utilMonthDays.monthDays.apply(null, ymd));
const monthLoHi = ymd => {
  const [y, m] = ymd;
  return [[y, m, 1], [y, m, utilMonthDays.monthDays(y, m)]];
};

exports.monthHi = monthHi;
exports.monthLo = monthLo;
exports.monthLoHi = monthLoHi;
exports.seasonHi = seasonHi;
exports.seasonLo = seasonLo;
exports.seasonLoHi = seasonLoHi;
exports.shiftDay = shiftDay;
exports.shiftMonth = shiftMonth;
exports.shiftQuarter = shiftQuarter;
exports.shiftYear = shiftYear;
exports.within = within;
