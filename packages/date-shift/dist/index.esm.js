import { ymdToInt } from '@valjoux/convert';
import { monthDays } from '@valjoux/util-ymd';
import { forwardDays, backwardDays } from '@valjoux/day-shift';
import { min } from '@aryth/comparer';

const belongTo = (ymd, lo, hi) => ymdToInt(lo) <= (ymd = ymdToInt(ymd)) && ymd <= ymdToInt(hi);

const shiftDay = (ymd, days) => {
  if (days > 0) return forwardDays(ymd, days);
  if (days < 0) return backwardDays(ymd, days);
  return ymd;
};
const shiftMonth = (ymd, dif) => {
  let [y, m, d] = ymd,
      isEnd = d >= monthDays(ymd),
      dy;
  dy = ~~((m += dif) / 12), m %= 12, y += dy;
  if (m < 1) y--, m += 12;
  ymd[0] = y, ymd[1] = m, ymd[2] = isEnd ? monthDays(ymd) : min(d, monthDays(ymd));
  return ymd;
};
const shiftYear = (ymd, dif) => {
  let d = ymd[2],
      isEnd = d >= monthDays(ymd);
  ymd[0] += dif, ymd[2] = isEnd ? monthDays(ymd) : min(d, monthDays(ymd));
  return ymd;
};
const shiftQuarter = (ymd, dif) => shiftMonth(ymd, dif * 3);

const seasonLoHi = ymd => {
  const [y, m] = ymd;
  let hi = ~~((m - 1) / 3 + 1) * 3;
  return [[y, hi - 2, 1], [y, hi, monthDays([y, hi])]];
};
const monthLoHi = ymd => {
  const [y, m] = ymd;
  return [[y, m, 1], [y, m, monthDays(ymd)]];
};

export { belongTo, monthLoHi, seasonLoHi, shiftDay, shiftMonth, shiftQuarter, shiftYear };
