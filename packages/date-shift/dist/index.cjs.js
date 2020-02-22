'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('@valjoux/convert');
var utilYmd = require('@valjoux/util-ymd');
var dayShift = require('@valjoux/day-shift');
var comparer = require('@aryth/comparer');

const belongTo = (ymd, lo, hi) => convert.ymdToInt(lo) <= (ymd = convert.ymdToInt(ymd)) && ymd <= convert.ymdToInt(hi);

const shiftDay = (ymd, days) => {
  if (days > 0) return dayShift.forwardDays(ymd, days);
  if (days < 0) return dayShift.backwardDays(ymd, days);
  return ymd;
};
const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd,
      isEnd = d >= utilYmd.monthDays(ymd),
      dy;
  dy = ~~((m += dif) / 12), m %= 12, y += dy;
  if (m < 1) y--, m += 12;
  ymd[0] = y, ymd[1] = m, ymd[2] = isEnd ? utilYmd.monthDays(ymd) : comparer.min(d, utilYmd.monthDays(ymd));
  return ymd;
};
const shiftYear = (ymd, dif) => {
  let d = ymd[2],
      isEnd = d >= utilYmd.monthDays(ymd);
  ymd[0] += dif, ymd[2] = isEnd ? utilYmd.monthDays(ymd) : comparer.min(d, utilYmd.monthDays(ymd));
  return ymd;
};
const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3);

const seasonLoHi = ymd => {
  const [y, m] = ymd;
  let hi = ~~((m - 1) / 3 + 1) * 3;
  return [[y, hi - 2, 1], [y, hi, utilYmd.monthDays([y, hi])]];
};
const monthLoHi = ymd => {
  const [y, m] = ymd;
  return [[y, m, 1], [y, m, utilYmd.monthDays(ymd)]];
};

exports.belongTo = belongTo;
exports.monthLoHi = monthLoHi;
exports.seasonLoHi = seasonLoHi;
exports.shiftDay = shiftDay;
exports.shiftMonth = shiftMonth;
exports.shiftQuarter = shiftQuarter;
exports.shiftYear = shiftYear;
