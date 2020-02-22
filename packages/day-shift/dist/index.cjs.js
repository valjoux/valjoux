'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilBitwise = require('@valjoux/util-bitwise');
var utilLeapYear = require('@valjoux/util-leap-year');
var utilMonthDays = require('@valjoux/util-month-days');

const forwardDays = (int, dif) => {
  let ym = utilBitwise.readYearMonth(int),
      d = utilBitwise.readDay(int) + dif,
      y = ym[0];
  const lpEnt = {
    cr: utilLeapYear.isLeap(y),
    nx: utilLeapYear.isLeap(y + 1)
  };
  const nxY = nextYear.bind(lpEnt),
        nxM = nextMonth.bind(lpEnt),
        yDays = yearDays.bind(lpEnt),
        mDays = monthDays.bind(lpEnt);
  let q;

  while (d >= (q = yDays(ym))) d -= q, nxY(ym);

  while (d > (q = mDays(ym))) d -= q, nxM(ym);

  return ym.push(d), ym;
};

const nextYear = function (ym) {
  return ym[0]++, this.cr = this.nx, this.nx = utilLeapYear.isLeap(ym[0]), ym;
};

const nextMonth = function (ym) {
  return ym[1] >= 12 ? (ym[1] = 1, nextYear.call(this, ym)) : (ym[1]++, ym);
};

const yearDays = function (ym) {
  return this.cr && ym[1] <= 2 || 2 < ym[1] && this.nx ? 366 : 365;
};

const monthDays = function (ym) {
  return utilMonthDays.monthDays(ym[1], this.cr);
};

const backwardDays = (int, dif) => {
  let ym = utilBitwise.readYearMonth(int),
      d = utilBitwise.readDay(int) + dif,
      y = ym[0];
  const lpEnt = {
    py: utilLeapYear.isLeap(y - 1),
    cr: utilLeapYear.isLeap(y)
  };
  const prvY = prevYear.bind(lpEnt),
        prvM = prevMonth.bind(lpEnt),
        prvYDays = prevYearDays.bind(lpEnt),
        prvMDays = prevMonthDays.bind(lpEnt);
  let q;

  while (d + (q = prvYDays(ym)) <= 0) d += q, prvY(ym);

  while (d <= 0) d += prvMDays(ym), prvM(ym);

  return ym.push(d), ym;
};

const prevYear = function (ym) {
  return ym[0]--, this.cr = this.py, this.py = utilLeapYear.isLeap(ym[0]), ym;
};

const prevMonth = function (ym) {
  return ym[1] <= 1 ? (ym[1] = 12, prevYear.call(this, ym)) : (ym[1]--, ym);
};

const prevYearDays = function (ym) {
  return this.py && ym[1] <= 2 || 2 < ym[1] && this.cr ? 366 : 365;
};

const prevMonthDays = function (ym) {
  let m = ym[1];
  return m <= 1 ? utilMonthDays.monthDays(12, this.py) : utilMonthDays.monthDays(m - 1, this.cr);
};

exports.backwardDays = backwardDays;
exports.forwardDays = forwardDays;
