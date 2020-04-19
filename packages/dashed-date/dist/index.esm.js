import '@valjoux/util-bitwise';
import { monthDays } from '@valjoux/util-month-days';

const padDigits = (n, l) => {
  n = '' + n;

  while (n.length < l) n = '0' + n;

  return n;
};

const padD4 = n => (n = +n) < 1000 ? padDigits(n, 4) : n;

const padD2 = n => ((n = +n) < 10 ? '0' : '') + n;

const dashify = (y, m, d, de = '-') => padD4(y) + de + padD2(m) + de + padD2(d);

const ymdToDash = (ymd, de = '-') => dashify(ymd[0], ymd[1], ymd[2], de);

const dashToYmd = dash => [+dash.slice(0, 4), +dash.slice(5, 7), +dash.slice(8, 10)];

const min = (a, b) => a < b ? a : b;

const isLeap = y => !(y % 4) && !!(y % 100) || !(y % 400);

const forwardDays = (ymd, dif) => {
  let [y, m, d] = ymd,
      q;
  const lp = {
    y,
    m,
    cr: isLeap(y),
    nx: isLeap(y + 1)
  };
  d += dif;

  while (d > (q = nextYDs.call(lp))) d -= q, nextY.call(lp);

  while (d > (q = nextMDs.call(lp))) d -= q, nextM.call(lp);

  return ymd[0] = lp.y, ymd[1] = lp.m, ymd[2] = d, ymd; // return [lp.y, lp.m, d]
};

const nextY = function () {
  this.y++, this.cr = this.nx, this.nx = isLeap(this.y);
};

const nextM = function () {
  this.m >= 12 ? (this.m = 1, nextY.call(this)) : this.m++;
};

const nextYDs = function () {
  return this.cr && this.m <= 2 || 2 < this.m && this.nx ? 366 : 365;
};

const nextMDs = function () {
  return monthDays(null, this.m, this.cr);
};

const backwardDays = (ymd, dif) => {
  let [y, m, d] = ymd,
      q;
  const lp = {
    y,
    m,
    py: isLeap(y - 1),
    cr: isLeap(y)
  };
  d += dif;

  while (d + (q = prevYDs.call(lp)) <= 0) d += q, prevY.call(lp);

  while (d <= 0) d += prevMDs.call(lp), prevM.call(lp);

  return ymd[0] = lp.y, ymd[1] = lp.m, ymd[2] = d, ymd; // return [lp.y, lp.m, d]
};

const prevY = function () {
  this.y--, this.cr = this.py, this.py = isLeap(this.y);
};

const prevM = function () {
  this.m <= 1 ? (this.m = 12, prevY.call(this)) : this.m--;
};

const prevYDs = function () {
  return this.py && this.m <= 2 || 2 < this.m && this.cr ? 366 : 365;
};

const prevMDs = function () {
  return this.m <= 1 ? monthDays(null, 12, this.py) : monthDays(null, this.m - 1, this.cr);
};

const shiftDay = (ymd, days) => {
  if (days > 0) return forwardDays(ymd, days);
  if (days < 0) return backwardDays(ymd, days);
  return ymd;
};

const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd,
      isEnd = d >= monthDays(ymd[0], ymd[1]),
      dy;
  dy = ~~((m += dif) / 12), m %= 12, y += dy;
  if (m < 1) y--, m += 12;
  ymd[0] = y, ymd[1] = m, ymd[2] = isEnd ? monthDays(ymd[0], ymd[1]) : min(d, monthDays(ymd[0], ymd[1]));
  return ymd;
};

const shiftYear = (ymd, dif) => {
  let d = ymd[2],
      isEnd = d >= monthDays(ymd[0], ymd[1]);
  ymd[0] += dif, ymd[2] = isEnd ? monthDays(ymd[0], ymd[1]) : min(d, monthDays(ymd[0], ymd[1]));
  return ymd;
};

const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3);

const shiftDay$1 = (dashed, dif) => {
  var _shiftD;

  return _shiftD = shiftDay(dashToYmd(dashed), dif), ymdToDash(_shiftD);
};
const shiftMonth$1 = (dashed, dif) => {
  var _shiftM;

  return _shiftM = shiftMonth(dashToYmd(dashed), dif), ymdToDash(_shiftM);
};
const shiftQuarter$1 = (dashed, dif) => {
  var _shiftQ;

  return _shiftQ = shiftQuarter(dashToYmd(dashed), dif), ymdToDash(_shiftQ);
};
const shiftYear$1 = (dashed, dif) => {
  var _shiftY;

  return _shiftY = shiftYear(dashToYmd(dashed), dif), ymdToDash(_shiftY);
};

export { shiftDay$1 as shiftDay, shiftMonth$1 as shiftMonth, shiftQuarter$1 as shiftQuarter, shiftYear$1 as shiftYear };
