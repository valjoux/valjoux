export const monthCap = (m, lp) =>
  m !== 0b10
    ? 30 + m % 0b10 ^ m >= 0x8
    : 28 + lp
