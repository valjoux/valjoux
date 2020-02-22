export const leapYear = y => y % 4
  ? false
  : y % 100
    ? true
    : !(y % 400)
