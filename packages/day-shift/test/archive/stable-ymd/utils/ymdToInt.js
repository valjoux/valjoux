export const ymdToInt = ([y, m, d]) =>
  ((y & 0xffff) << 9) + ((m & 0xf) << 5) + ((d & 0x1f) << 0)
