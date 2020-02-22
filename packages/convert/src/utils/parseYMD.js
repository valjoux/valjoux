const pdz = (n, l) => {
  n = '' + n
  while (n.length < l) n = '0' + n
  return n
}

export const joinYMD = (y, m, d, l = '-') =>
  ((y = +y) < 1000 ? pdz(y, 4) : y) + l +
  ((m = +m) < 10 ? pdz(m, 2) : m) + l +
  ((d = +d) < 10 ? pdz(d, 2) : d)

export const splitYMD = y4md => [+y4md.slice(0, 4), +y4md.slice(5, 7), +y4md.slice(8, 10)]

export const parseYMD = dt => typeof dt === 'string' ? splitYMD(dt) : dt

