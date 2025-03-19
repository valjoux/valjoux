import { readYear, readMonth, readDay, bitYear, bitMonth, bitDay } from '@valjoux/util-bitwise';

const padDigits = (n, l) => {
  n = '' + n;
  while (n.length < l) n = '0' + n;
  return n
};

const padD4 = n => ((n = +n) < 1000 ? padDigits(n, 4) : n);
const padD2 = n => ((n = +n) < 10 ? '0' : '') + n;

const dashify = (y, m, d, de = '-') => padD4(y) + de + padD2(m) + de + padD2(d);

const dateToDate = date => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const dashToDate = dash => new Date(+dash.slice(0, 4), +dash.slice(5, 7) - 1, +dash.slice(8, 10));
const intToDate = int => new Date(readYear(int), readMonth(int) - 1, readDay(int));
const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2]);

const dateToDash = (date, de = '-') => dashify(date.getFullYear(), date.getMonth() + 1, date.getDate(), de);
const dashToDash = (dash, de = '-') => dashify(+dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10), de);
const intToDash = (int, de = '-') => dashify(readYear(int), readMonth(int), readDay(int), de);
const ymdToDash = (ymd, de = '-') => dashify(ymd[0], ymd[1], ymd[2], de);

const dateToInt = date => bitYear(date.getFullYear()) + bitMonth(date.getMonth() + 1) + bitDay(date.getDate());
const dashToInt = dash => bitYear(+dash.slice(0, 4)) + bitMonth(+dash.slice(5, 7)) + bitDay(+dash.slice(8, 10));
const intToInt = int => bitYear(int >> 9) + bitMonth(int >> 5) + bitDay(int >> 0);
const ymdToInt = ymd => bitYear(ymd[0]) + bitMonth(ymd[1]) + bitDay(ymd[2]);

const dateToYmd = date => [ date.getFullYear(), date.getMonth() + 1, date.getDate() ];
const dashToYmd = dash => [ +dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10) ];
const intToYmd = int => [ readYear(int), readMonth(int), readDay(int) ];
const ymdToYmd = ymd => [ +ymd[0], +ymd[1], +ymd[2] ];

export { dashToDash, dashToDate, dashToInt, dashToYmd, dashify, dateToDash, dateToDate, dateToInt, dateToYmd, intToDash, intToDate, intToInt, intToYmd, ymdToDash, ymdToDate, ymdToInt, ymdToYmd };
