import { monthDays } from '@valjoux/util-month-days';

const prevMonth = ym => ym[1] <= 1 ? (ym[1] = 12, ym[0]--, ym) : (ym[1]--, ym);
const nextMonth = ym => ym[1] >= 12 ? (ym[1] = 1, ym[0]++, ym) : (ym[1]++, ym);

const calibre = ymd => {
  const max = monthDays(ymd[0], ymd[1]);
  if (ymd[2] > max) ymd[2] = max;
  return ymd;
};

export { calibre, nextMonth, prevMonth };
