export const prevMonth = (ym) =>
  ym[1] <= 1
    ? (ym[1] = 12, ym[0]--, ym)
    : (ym[1]--, ym)

export const nextMonth = (ym) =>
  ym[1] >= 12
    ? (ym[1] = 1, ym[0]++, ym)
    : (ym[1]++, ym)
