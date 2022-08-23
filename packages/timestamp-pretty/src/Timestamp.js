import { METRO, SUBTLE } from '@palett/presets'
import { Projec }        from '@palett/projector'
import { DASH, QT, RT }  from '@spare/enum-chars'
import { padDeci }       from '../utils/padDeci'
import { padKilo }       from '../utils/padKilo'
import { padMilli }      from '../utils/padMilli'

export class Timestamp {

  constructor(dt, tm, ml) {
    if (dt) {
      this.dy = (new Projec(dt)).load(1990, 2030)
      this.dm = (new Projec(dt)).load(1, 12)
      this.dd = (new Projec(dt)).load(1, 31)
    }
    if (tm) {
      this.dh = (new Projec(tm)).load(0, 23)
      this.ds = (new Projec(tm)).load(0, 59)
    }
    if (ml) {
      this.dt = (new Projec(ml)).load(0, 999)
    }
  }

  static build(dt = METRO, tm = SUBTLE, ml = SUBTLE) {
    return new Timestamp(dt, tm, ml)
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