import { Crostab }     from '@analyz/crostab'
import { product }     from '@vect/matrix'
import { decoCrostab } from '@spare/logger'
import { says }        from '@spare/xr'

const candidates = [
  'a',
  NaN,
  null,
  undefined,
]

for (let x of candidates) {
  `[${x}] (${isNaN(x)}) ` |> console.log
}

const numbers = [
  NaN,
  0,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY
]
const crostab = Crostab.build(
  numbers.slice(),
  numbers.slice(),
  product(numbers, numbers, (x, y) => x > y),
  ''
)

crostab |> decoCrostab |> says.comparison

{
  const integers = [
    0,
    1,
    8,
    255
  ]
  for (let n of integers) {
    `[${n}] (${~n})` |> says.bitwise
  }
}

{
  const candidates = [
    '0000',
    '0001',
    '1010',
    '1000',
  ]
  for (let tx of candidates) {
    let ts = 0b0000
    for (let i = 0, hi = tx.length - 1; i <= hi; i++) { ts |= (+tx[i]) << (hi - i) }
    ts.toString(2).padStart(4, '0') |> says.bitwise;
    [ts >> 3 & 1, ts >> 2 & 1, ts >> 1 & 1, ts >> 0 & 1,] |> console.log;
  }
}