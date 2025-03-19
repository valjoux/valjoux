import { ymdToDash, dashToYmd, dashify } from '@valjoux/convert';
import { shiftDay as shiftDay$1, shiftMonth as shiftMonth$1, shiftQuarter as shiftQuarter$1, shiftYear as shiftYear$1 } from '@valjoux/date-shift';
import { isLeap } from '@valjoux/util-leap-year';
import { monthToSeason, monthDays, seasonLast } from '@valjoux/util-month-days';

const shiftDay = (dashed, dif) => ymdToDash(shiftDay$1(dashToYmd(dashed), dif));
const shiftMonth = (dashed, dif) => ymdToDash(shiftMonth$1(dashToYmd(dashed), dif));
const shiftQuarter = (dashed, dif) => ymdToDash(shiftQuarter$1(dashToYmd(dashed), dif));
const shiftYear = (dashed, dif) => ymdToDash(shiftYear$1(dashToYmd(dashed), dif));

const year = dashed => +dashed.slice(0, 4);
const month = dashed => +dashed.slice(5, 7);
const day = dashed => +dashed.slice(8, 10);
const yearMonth = (dashed) => dashed.slice(0, 7);

const season = (dashed) => year(dashed) + 'Q' + monthToSeason(month(dashed));

const seasonEnds = (year) => {
  const islp = isLeap(year);
  return [3, 6, 9, 12].map(m => dashify(year, m, monthDays(year, m, islp)))
};

const monthLo = (dashed) => {
  const y = year(dashed), m = month(dashed);
  return dashify(y, m, monthDays(y, 1))
};

const monthHi = (dashed) => {
  const y = year(dashed), m = month(dashed);
  return dashify(y, m, monthDays(y, m))
};

const monthLoHi = (dashed) => {
  const y = year(dashed), m = month(dashed);
  return [dashify(y, m, 1), dashify(y, m, monthDays(y, m))]
};

const seasonLo = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m);
  return dashify(y, hi - 2, 1)
};

const seasonHi = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m);
  return dashify(y, hi, monthDays(y, hi))
};

const seasonLoHi = (dashed) => {
  const y = year(dashed), m = month(dashed), hi = seasonLast(m);
  return [dashify(y, hi - 2, 1), dashify(y, hi, monthDays(y, hi))]
};

const within = (dashed, lo, hi) => (lo.localeCompare(dashed) <= 0) && (dashed.localeCompare(hi) <= 0);

export { day, month, monthHi, monthLo, monthLoHi, season, seasonEnds, seasonHi, seasonLo, seasonLoHi, shiftDay, shiftMonth, shiftQuarter, shiftYear, within, year, yearMonth };
