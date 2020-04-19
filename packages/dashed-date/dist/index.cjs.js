'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('@valjoux/convert');
var dateShift = require('@valjoux/date-shift');
var utilLeapYear = require('@valjoux/util-leap-year');
var utilMonthDays = require('@valjoux/util-month-days');

const shiftDay = (dashed, dif) => {
  var _shiftD;

  return _shiftD = dateShift.shiftDay(convert.dashToYmd(dashed), dif), convert.ymdToDash(_shiftD);
};
const shiftMonth = (dashed, dif) => {
  var _shiftM;

  return _shiftM = dateShift.shiftMonth(convert.dashToYmd(dashed), dif), convert.ymdToDash(_shiftM);
};
const shiftQuarter = (dashed, dif) => {
  var _shiftQ;

  return _shiftQ = dateShift.shiftQuarter(convert.dashToYmd(dashed), dif), convert.ymdToDash(_shiftQ);
};
const shiftYear = (dashed, dif) => {
  var _shiftY;

  return _shiftY = dateShift.shiftYear(convert.dashToYmd(dashed), dif), convert.ymdToDash(_shiftY);
};

const year = dashed => +dashed.slice(0, 4);
const month = dashed => +dashed.slice(5, 7);
const day = dashed => +dashed.slice(8, 10);
const yearMonth = dashed => dashed.slice(0, 7);
const seasonEnds = year => {
  const islp = utilLeapYear.isLeap(year);
  return [3, 6, 9, 12].map(m => convert.dashify(year, m, utilMonthDays.monthDays(year, m, islp)));
};
const monthLo = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return convert.dashify(y, m, utilMonthDays.monthDays(y, 1));
};
const monthHi = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return convert.dashify(y, m, utilMonthDays.monthDays(y, m));
};
const monthLoHi = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return [convert.dashify(y, m, 1), convert.dashify(y, m, utilMonthDays.monthDays(y, m))];
};
const seasonLo = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = utilMonthDays.seasonLast(m);
  return convert.dashify(y, hi - 2, 1);
};
const seasonHi = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = utilMonthDays.seasonLast(m);
  return convert.dashify(y, hi, utilMonthDays.monthDays(y, hi));
};
const seasonLoHi = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = utilMonthDays.seasonLast(m);
  return [convert.dashify(y, hi - 2, 1), convert.dashify(y, hi, utilMonthDays.monthDays(y, hi))];
};

const within = (dashed, lo, hi) => lo.localeCompare(dashed) <= 0 && dashed.localeCompare(hi) <= 0;

exports.day = day;
exports.month = month;
exports.monthHi = monthHi;
exports.monthLo = monthLo;
exports.monthLoHi = monthLoHi;
exports.seasonEnds = seasonEnds;
exports.seasonHi = seasonHi;
exports.seasonLo = seasonLo;
exports.seasonLoHi = seasonLoHi;
exports.shiftDay = shiftDay;
exports.shiftMonth = shiftMonth;
exports.shiftQuarter = shiftQuarter;
exports.shiftYear = shiftYear;
exports.within = within;
exports.year = year;
exports.yearMonth = yearMonth;
