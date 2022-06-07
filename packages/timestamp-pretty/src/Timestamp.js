import { METRO, SUBTLE } from '@palett/presets'
import { Proj }          from '@palett/projector'
import { DASH, QT, RT }  from '@spare/enum-chars'
import { padDeci }       from '../utils/padDeci'
import { padKilo }       from '../utils/padKilo'
import { padMilli }      from '../utils/padMilli'

export class Timestamp {

  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = Proj.from({ min: 1990, max: 2030 }, datePreset)
      this.dm = Proj.from({ min: 1, max: 12 }, datePreset)
      this.dd = Proj.from({ min: 1, max: 31 }, datePreset)
    }
    if (timePreset) {
      this.dh = Proj.from({ min: 0, max: 23 }, timePreset)
      this.ds = Proj.from({ min: 0, max: 59 }, timePreset)
    }
    if (milliPreset) {
      this.dt = Proj.from({ min: 0, max: 999 }, milliPreset)
    }
  }

  static build(datePreset = METRO, timePreset = SUBTLE, milliPreset = SUBTLE) {
    return new Timestamp(datePreset, timePreset, milliPreset)
  }

  /** @param {Date} dt */
  date(dt = new Date()) { return this.decoYMD(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()) }
  /** @param {Date} dt */
  roughTime(dt = new Date()) { return this.decoHMS(dt.getHours(), dt.getMinutes(), dt.getSeconds()) }
  /** @param {Date} dt */
  time(dt = new Date()) { return this.roughTime(dt) + '.' + this.decoMilli(dt.getMilliseconds()) }
  /** @param {Date} dt */
  dateTime(dt = new Date()) { return this.date(dt) + QT + this.roughTime(dt) }

  decoYMD(year, month, day) {
    return this.dy
      ? (
        (this.dy.render(year, padKilo(year))) + DASH +
        (this.dm.render(month, padDeci(month))) + DASH +
        (this.dd.render(day, padDeci(day)))
      )
      : (padKilo(year) + DASH + padDeci(month) + DASH + padDeci(day))
  }

  decoHMS(hour, minute, second) {
    return this.dh
      ? (
        (this.dh.render(hour, padDeci(hour))) + RT +
        (this.ds.render(minute, padDeci(minute))) + RT +
        (this.ds.render(second, padDeci(second)))
      )
      : (padDeci(hour) + RT + padDeci(minute) + RT + padDeci(second))
  }

  decoMilli(milli) { return this.dt ? this.dt.render(milli, padMilli(milli)) : padMilli(milli) }
}