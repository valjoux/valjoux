import { lim0up, rec0up }               from '@aryth/math'
import { hexToInt }                     from '@palett/convert'
import { CSI, FORE_DEF, FORE_INI, SGR } from '@palett/enum-ansi-codes'
import { SC }                           from '@palett/util-ansi'
import { hexToHuv, hslToInt }           from '../utils/convert.js'
import { scale }                        from '../utils/scale.js'
import { style }                        from '../utils/style.js'

/** @typedef {[number,number,number]} Triple */

export class HslProj {
  /** @type {string} */ head = ''
  /** @type {string} */ tail = ''
  /** @type {Dye}    */ dye
  /** @type {number} */ lo
  /** @type {Triple} */ lev
  /** @type {Triple} */ min
  /** @type {number} */ na

  constructor(bound, preset) {
    if (preset?.effects) { style.call(this, preset.effects) }
    const dfV = bound.hi - bound.lo, min = hexToHuv(preset.min), max = hexToHuv(preset.max) // `[${hiH} - ${loH}] (${dfH}) [${hiS} - ${loS}] (${dfS}) [${hiL} - ${loL}] (${dfL})` |> console.log
    this.na = hexToInt(preset.na)
    this.lo = bound.lo
    this.min = [ min >> 14 & 0x1FF, min >> 7 & 0x7F, min >> 0 & 0x7F ]
    this.lev = dfV === 0
      ? [ 0, 0, 0 ]
      : [ ((max >> 14 & 0x1FF) - this.min[0]) / dfV, ((max >> 7 & 0x7F) - this.min[1]) / dfV, ((max >> 0 & 0x7F) - this.min[2]) / dfV ]
  }
  static from(bound, preset) { return new HslProj(bound, preset) }
  into(val) {
    if (isNaN(val)) return this.na // const loH = ((min >> 14) & 0x1FF), loS = ((min >> 7) & 0x7F), loL = ((min >> 0) & 0x7F)
    const h = rec0up(scale(val, this.lo, this.lev[0], this.min[0]), 360),
          s = lim0up(scale(val, this.lo, this.lev[1], this.min[1]), 100),
          l = lim0up(scale(val, this.lo, this.lev[2], this.min[2]), 100)
    return hslToInt(h, s, l)
  }
  make(val) { return this.dye.make(this.into(val)) }
  render(val, text) {
    const n = this.into(val)
    const r = n >> 16 & 0xFF, g = n >> 8 & 0xFF, b = n & 0xFF
    const head = this.head + FORE_INI + SC + r + SC + g + SC + b
    const tail = this.tail + FORE_DEF
    return CSI + head + SGR + text + CSI + tail + SGR // return `[38;2;${head}${r};${g};${b}m${text}[${tail}39m`
  }
}