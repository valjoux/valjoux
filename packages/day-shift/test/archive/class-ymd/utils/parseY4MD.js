const pad0 = (n, l) => {
  n = '' + n
  while (n.length < l) n = '0' + n
  return n
}

export const joinY4MD = (y, m, d, l = '-') =>
  `${+y < 1000 ? pad0(+y, 4) : +y}${l}${+m < 10 ? pad0(+m, 2) : +m}${l}${+d < 10 ? pad0(+d, 2) : +d}`

export const splitY4MD = y4md => [+y4md.slice(0, 4), +y4md.slice(5, 7), +y4md.slice(8, 10)]

export const parseY4MD = dt => typeof dt === 'string' ? splitY4MD(dt) : dt

