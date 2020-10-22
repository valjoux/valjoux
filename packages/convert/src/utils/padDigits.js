const padDigits = (n, l) => {
  n = '' + n
  while (n.length < l) n = '0' + n
  return n
}

export const padD4 = n => ((n = +n) < 1000 ? padDigits(n, 4) : n)
export const padD2 = n => ((n = +n) < 10 ? '0' : '') + n
