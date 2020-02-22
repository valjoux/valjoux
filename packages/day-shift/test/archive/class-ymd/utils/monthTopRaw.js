export const monthTopRaw = (m, lp) =>
  m !== 0x2
    ? 30 + m % 0x2 ^ m >= 0x8
    : 28 + lp
