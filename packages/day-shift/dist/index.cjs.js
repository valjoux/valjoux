'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilLeapYear = require('@valjoux/util-leap-year');
var utilMonthDays = require('@valjoux/util-month-days');

const forwardDays = (ymd, dif) => {
  let [y, m, d] = ymd,
      q;
  const lp = {
    y,
    m,
    cr: utilLeapYear.isLeap(y),
    nx: utilLeapYear.isLeap(y + 1)
  };
  d += dif;

  while (d > (q = nextYDs.call(lp))) d -= q, nextY.call(lp);

  while (d > (q = nextMDs.call(lp))) d -= q, nextM.call(lp);

  return ymd[0] = lp.y, ymd[1] = lp.m, ymd[2] = d, ymd; // return [lp.y, lp.m, d]
};

const nextY = function () {
  this.y++, this.cr = this.nx, this.nx = utilLeapYear.isLeap(this.y);
};

const nextM = function () {
  this.m >= 12 ? (this.m = 1, nextY.call(this)) : this.m++;
};

const nextYDs = function () {
  return this.cr && this.m <= 2 || 2 < this.m && this.nx ? 366 : 365;
};

const nextMDs = function () {
  return utilMonthDays.monthDays(null, this.m, this.cr);
};

const backwardDays = (ymd, dif) => {
  let [y, m, d] = ymd,
      q;
  const lp = {
    y,
    m,
    py: utilLeapYear.isLeap(y - 1),
    cr: utilLeapYear.isLeap(y)
  };
  d += dif;

  while (d + (q = prevYDs.call(lp)) <= 0) d += q, prevY.call(lp);

  while (d <= 0) d += prevMDs.call(lp), prevM.call(lp);

  return ymd[0] = lp.y, ymd[1] = lp.m, ymd[2] = d, ymd; // return [lp.y, lp.m, d]
};

const prevY = function () {
  this.y--, this.cr = this.py, this.py = utilLeapYear.isLeap(this.y);
};

const prevM = function () {
  this.m <= 1 ? (this.m = 12, prevY.call(this)) : this.m--;
};

const prevYDs = function () {
  return this.py && this.m <= 2 || 2 < this.m && this.cr ? 366 : 365;
};

const prevMDs = function () {
  return this.m <= 1 ? utilMonthDays.monthDays(null, 12, this.py) : utilMonthDays.monthDays(null, this.m - 1, this.cr);
};

exports.backwardDays = backwardDays;
exports.forwardDays = forwardDays;
