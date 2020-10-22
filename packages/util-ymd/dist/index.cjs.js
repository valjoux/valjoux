'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilMonthDays = require('@valjoux/util-month-days');

const prevMonth = ym => ym[1] <= 1 ? (ym[1] = 12, ym[0]--, ym) : (ym[1]--, ym);
const nextMonth = ym => ym[1] >= 12 ? (ym[1] = 1, ym[0]++, ym) : (ym[1]++, ym);

const calibre = ymd => {
  const max = utilMonthDays.monthDays(ymd[0], ymd[1]);
  if (ymd[2] > max) ymd[2] = max;
  return ymd;
};

exports.calibre = calibre;
exports.nextMonth = nextMonth;
exports.prevMonth = prevMonth;
