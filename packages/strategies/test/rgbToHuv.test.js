import { E2, round } from '@aryth/math'
import { hue }       from '@palett/convert'

const candidates = [
  [ 0, 0, 0 ],
  [ 0, 0, 255 ],
  [ 0, 255, 0 ],
  [ 255, 255, 0 ],
  [ 255, 255, 255 ],
]

function rgbToHuv(r, g, b) {
  // `[r] (${r}) [g] (${g}) [b] (${b})` |> console.log
  r /= 255, g /= 255, b /= 255
  let hi = r, lo = r
  {
    if (g > r) { hi = g }
    else { lo = g }
    if (b > hi) hi = b
    if (b < lo) lo = b
  }
  const sm = hi + lo, df = hi - lo
  let h = hue(r, g, b, hi, df) * 60,
      s = !df ? 0 : sm > 1 ? df / (2 - sm) : df / sm,
      l = sm / 2
  h = round(h), s = round(s * E2) , l = round(l * E2)
  // `[h] (${h}) [s] (${s}) [l] (${l})` |> console.log
  return ((h & 0x1FF) << 14) + ((s & 0x7F) << 7) + ((l & 0x7F) << 0)
}

function huvToHsl(huv) {
  const h = ((huv >> 14) & 0x1FF), s = ((huv >> 7) & 0x7F), l = ((huv >> 0) & 0x7F)
  return [ h, s, l ]
}

for (let rgb of candidates) {
  const [ r, g, b ] = rgb
  const huv = rgbToHuv(r, g, b);
  `[${rgb}] (${huvToHsl(huv)})` |> console.log
}