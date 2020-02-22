'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilBitwise = require('@valjoux/util-bitwise');

const pdz = (n, l) => {
  n = '' + n;

  while (n.length < l) n = '0' + n;

  return n;
};

const joinYMD = (y, m, d, l = '-') => ((y = +y) < 1000 ? pdz(y, 4) : y) + l + ((m = +m) < 10 ? pdz(m, 2) : m) + l + ((d = +d) < 10 ? pdz(d, 2) : d);

const dashToDate = dst => new Date(+dst.slice(0, 4), +dst.slice(5, 7) - 1, +dst.slice(8, 10));
const intToDate = int => new Date(utilBitwise.readYear(int), utilBitwise.readMonth(int) - 1, utilBitwise.readDay(int));
const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2]);
const dateToDash = (date, de = '-') => joinYMD(date.getFullYear(), date.getMonth() + 1, date.getDate(), de);
const intToDash = (int, de = '-') => joinYMD(utilBitwise.readYear(int), utilBitwise.readMonth(int), utilBitwise.readDay(int), de);
const ymdToDash = (ymd, de = '-') => joinYMD(ymd[0], ymd[1], ymd[2], de);
const dateToInt = date => utilBitwise.bitYear(date.getFullYear()) + utilBitwise.bitMonth(date.getMonth() + 1) + utilBitwise.bitDay(date.getDate());
const dashToInt = dst => utilBitwise.bitYear(+dst.slice(0, 4)) + utilBitwise.bitMonth(+dst.slice(5, 7)) + utilBitwise.bitDay(+dst.slice(8, 10));
const ymdToInt = ymd => utilBitwise.bitYear(ymd[0]) + utilBitwise.bitMonth(ymd[1]) + utilBitwise.bitDay(ymd[2]);
const dateToYmd = date => [date.getFullYear(), date.getMonth() + 1, date.getDate()];
const dashToYmd = dst => [+dst.slice(0, 4), +dst.slice(5, 7), +dst.slice(8, 10)];
const intToYmd = int => [utilBitwise.readYear(int), utilBitwise.readMonth(int), utilBitwise.readDay(int)];

exports.dashToDate = dashToDate;
exports.dashToInt = dashToInt;
exports.dashToYmd = dashToYmd;
exports.dateToDash = dateToDash;
exports.dateToInt = dateToInt;
exports.dateToYmd = dateToYmd;
exports.intToDash = intToDash;
exports.intToDate = intToDate;
exports.intToYmd = intToYmd;
exports.ymdToDash = ymdToDash;
exports.ymdToDate = ymdToDate;
exports.ymdToInt = ymdToInt;
