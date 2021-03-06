'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilBitwise = require('@valjoux/util-bitwise');

const padDigits = (n, l) => {
  n = '' + n;

  while (n.length < l) n = '0' + n;

  return n;
};

const padD4 = n => (n = +n) < 1000 ? padDigits(n, 4) : n;
const padD2 = n => ((n = +n) < 10 ? '0' : '') + n;

const dashify = (y, m, d, de = '-') => padD4(y) + de + padD2(m) + de + padD2(d);

const dashToDate = dash => new Date(+dash.slice(0, 4), +dash.slice(5, 7) - 1, +dash.slice(8, 10));
const intToDate = int => new Date(utilBitwise.readYear(int), utilBitwise.readMonth(int) - 1, utilBitwise.readDay(int));
const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2]);
const dateToDash = (date, de = '-') => dashify(date.getFullYear(), date.getMonth() + 1, date.getDate(), de);
const intToDash = (int, de = '-') => dashify(utilBitwise.readYear(int), utilBitwise.readMonth(int), utilBitwise.readDay(int), de);
const ymdToDash = (ymd, de = '-') => dashify(ymd[0], ymd[1], ymd[2], de);
const dateToInt = date => utilBitwise.bitYear(date.getFullYear()) + utilBitwise.bitMonth(date.getMonth() + 1) + utilBitwise.bitDay(date.getDate());
const dashToInt = dash => utilBitwise.bitYear(+dash.slice(0, 4)) + utilBitwise.bitMonth(+dash.slice(5, 7)) + utilBitwise.bitDay(+dash.slice(8, 10));
const ymdToInt = ymd => utilBitwise.bitYear(ymd[0]) + utilBitwise.bitMonth(ymd[1]) + utilBitwise.bitDay(ymd[2]);
const dateToYmd = date => [date.getFullYear(), date.getMonth() + 1, date.getDate()];
const dashToYmd = dash => [+dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10)];
const intToYmd = int => [utilBitwise.readYear(int), utilBitwise.readMonth(int), utilBitwise.readDay(int)];

exports.dashToDate = dashToDate;
exports.dashToInt = dashToInt;
exports.dashToYmd = dashToYmd;
exports.dashify = dashify;
exports.dateToDash = dateToDash;
exports.dateToInt = dateToInt;
exports.dateToYmd = dateToYmd;
exports.intToDash = intToDash;
exports.intToDate = intToDate;
exports.intToYmd = intToYmd;
exports.ymdToDash = ymdToDash;
exports.ymdToDate = ymdToDate;
exports.ymdToInt = ymdToInt;
