import { dashToYmd, ymdToDash, dashify } from '@valjoux/convert';
import { shiftDay as shiftDay$1, shiftMonth as shiftMonth$1, shiftQuarter as shiftQuarter$1, shiftYear as shiftYear$1 } from '@valjoux/date-shift';
import { isLeap } from '@valjoux/util-leap-year';
import { monthDays, seasonLast } from '@valjoux/util-month-days';

const shiftDay = (dashed, dif) => {
  var _shiftD;

  return _shiftD = shiftDay$1(dashToYmd(dashed), dif), ymdToDash(_shiftD);
};
const shiftMonth = (dashed, dif) => {
  var _shiftM;

  return _shiftM = shiftMonth$1(dashToYmd(dashed), dif), ymdToDash(_shiftM);
};
const shiftQuarter = (dashed, dif) => {
  var _shiftQ;

  return _shiftQ = shiftQuarter$1(dashToYmd(dashed), dif), ymdToDash(_shiftQ);
};
const shiftYear = (dashed, dif) => {
  var _shiftY;

  return _shiftY = shiftYear$1(dashToYmd(dashed), dif), ymdToDash(_shiftY);
};

const year = dashed => +dashed.slice(0, 4);
const month = dashed => +dashed.slice(5, 7);
const day = dashed => +dashed.slice(8, 10);
const yearMonth = dashed => dashed.slice(0, 7);
const seasonEnds = year => {
  const islp = isLeap(year);
  return [3, 6, 9, 12].map(m => dashify(year, m, monthDays(year, m, islp)));
};
const monthLo = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return dashify(y, m, monthDays(y, 1));
};
const monthHi = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return dashify(y, m, monthDays(y, m));
};
const monthLoHi = dashed => {
  const y = year(dashed),
        m = month(dashed);
  return [dashify(y, m, 1), dashify(y, m, monthDays(y, m))];
};
const seasonLo = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = seasonLast(m);
  return dashify(y, hi - 2, 1);
};
const seasonHi = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = seasonLast(m);
  return dashify(y, hi, monthDays(y, hi));
};
const seasonLoHi = dashed => {
  const y = year(dashed),
        m = month(dashed),
        hi = seasonLast(m);
  return [dashify(y, hi - 2, 1), dashify(y, hi, monthDays(y, hi))];
};

const within = (dashed, lo, hi) => lo.localeCompare(dashed) <= 0 && dashed.localeCompare(hi) <= 0;

export { day, month, monthHi, monthLo, monthLoHi, seasonEnds, seasonHi, seasonLo, seasonLoHi, shiftDay, shiftMonth, shiftQuarter, shiftYear, within, year, yearMonth };
