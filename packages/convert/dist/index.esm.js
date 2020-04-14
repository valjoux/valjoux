import { readYear, readMonth, readDay, bitYear, bitMonth, bitDay } from '@valjoux/util-bitwise';

const pa = (n, l) => {
  n = '' + n;

  while (n.length < l) n = '0' + n;

  return n;
};

const joinYMD = (y, m, d, l = '-') => ((y = +y) < 1000 ? pa(y, 4) : y) + l + ((m = +m) < 10 ? pa(m, 2) : m) + l + ((d = +d) < 10 ? pa(d, 2) : d);

const dashToDate = dst => new Date(+dst.slice(0, 4), +dst.slice(5, 7) - 1, +dst.slice(8, 10));
const intToDate = int => new Date(readYear(int), readMonth(int) - 1, readDay(int));
const ymdToDate = ymd => new Date(ymd[0], ymd[1] - 1, ymd[2]);
const dateToDash = (date, de = '-') => joinYMD(date.getFullYear(), date.getMonth() + 1, date.getDate(), de);
const intToDash = (int, de = '-') => joinYMD(readYear(int), readMonth(int), readDay(int), de);
const ymdToDash = (ymd, de = '-') => joinYMD(ymd[0], ymd[1], ymd[2], de);
const dateToInt = date => bitYear(date.getFullYear()) + bitMonth(date.getMonth() + 1) + bitDay(date.getDate());
const dashToInt = dst => bitYear(+dst.slice(0, 4)) + bitMonth(+dst.slice(5, 7)) + bitDay(+dst.slice(8, 10));
const ymdToInt = ymd => bitYear(ymd[0]) + bitMonth(ymd[1]) + bitDay(ymd[2]);
const dateToYmd = date => [date.getFullYear(), date.getMonth() + 1, date.getDate()];
const dashToYmd = dst => [+dst.slice(0, 4), +dst.slice(5, 7), +dst.slice(8, 10)];
const intToYmd = int => [readYear(int), readMonth(int), readDay(int)];

export { dashToDate, dashToInt, dashToYmd, dateToDash, dateToInt, dateToYmd, intToDash, intToDate, intToYmd, ymdToDash, ymdToDate, ymdToInt };
