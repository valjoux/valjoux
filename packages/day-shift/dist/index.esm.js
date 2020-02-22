import { readYearMonth, readDay } from '@valjoux/util-bitwise';
import { isLeap } from '@valjoux/util-leap-year';
import { monthDays as monthDays$1 } from '@valjoux/util-month-days';

const forwardDays = (int, dif) => {
  let ym = readYearMonth(int),
      d = readDay(int) + dif,
      y = ym[0];
  const lpEnt = {
    cr: isLeap(y),
    nx: isLeap(y + 1)
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
  return ym[0]++, this.cr = this.nx, this.nx = isLeap(ym[0]), ym;
};

const nextMonth = function (ym) {
  return ym[1] >= 12 ? (ym[1] = 1, nextYear.call(this, ym)) : (ym[1]++, ym);
};

const yearDays = function (ym) {
  return this.cr && ym[1] <= 2 || 2 < ym[1] && this.nx ? 366 : 365;
};

const monthDays = function (ym) {
  return monthDays$1(ym[1], this.cr);
};

const backwardDays = (int, dif) => {
  let ym = readYearMonth(int),
      d = readDay(int) + dif,
      y = ym[0];
  const lpEnt = {
    py: isLeap(y - 1),
    cr: isLeap(y)
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
  return ym[0]--, this.cr = this.py, this.py = isLeap(ym[0]), ym;
};

const prevMonth = function (ym) {
  return ym[1] <= 1 ? (ym[1] = 12, prevYear.call(this, ym)) : (ym[1]--, ym);
};

const prevYearDays = function (ym) {
  return this.py && ym[1] <= 2 || 2 < ym[1] && this.cr ? 366 : 365;
};

const prevMonthDays = function (ym) {
  let m = ym[1];
  return m <= 1 ? monthDays$1(12, this.py) : monthDays$1(m - 1, this.cr);
};

export { backwardDays, forwardDays };
