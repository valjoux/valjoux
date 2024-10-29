import { E2, round } from '@aryth/math'
import { hue }       from '@palett/convert'

const candidates = [
  -1,
  0,
  1,
  2,
  Math.PI,
  14.9,
  32,
]

for (let n of candidates) {
  console.log(`[${n}] (${n & 0x1F})`)
}



