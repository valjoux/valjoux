import { Colorant }      from '@palett/projector'
import { DASH, QT, RT }  from '@spare/enum-chars'
import { padDeci }       from '../utils/padDeci'
import { padKilo }       from '../utils/padKilo'
import { padMilli }      from '../utils/padMilli'
import { METRO, SUBTLE } from '@palett/presets'

export class Timestamp {

  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = Colorant({ min: 1990, max: 2030 }, datePreset)
      this.dm = Colorant({ min: 1, max: 12 }, datePreset)
      this.dd = Colorant({ min: 1, max: 31 }, datePreset)
    }
    if (timePreset) {
      this.dh = Colorant({ min: 0, max: 23 }, timePreset)
      this.ds = Colorant({ min: 0, max: 59 }, timePreset)
    }
    if (milliPreset) {
      this.dt = Colorant({ min: 0, max: 999 }, milliPreset)
    }
  }

  static build(datePreset = METRO, timePreset = SUBTLE, milliPreset = SUBTLE) {
    return new Timestamp(datePreset, timePreset, milliPreset)
  }

  /** @param {Date} dt */
  date(dt) { return this.decoYMD(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()) }
  /** @param {Date} dt */
  roughTime(dt) { return this.decoHMS(dt.getHours(), dt.getMinutes(), dt.getSeconds()) }
  /** @param {Date} dt */
  time(dt) { return this.roughTime(dt) + '.' + this.decoMilli(dt.getMilliseconds()) }
  /** @param {Date} dt */
  dateTime(dt) { return this.date(dt) + QT + this.roughTime(dt) }

  decoYMD(year, month, day) {
    return this.dy
      ? ((padKilo(year) |> this.dy(year)) + DASH +
        (padDeci(month) |> this.dm(month)) + DASH +
        (padDeci(day) |> this.dd(day)))
      : (padKilo(year) + DASH + padDeci(month) + DASH + padDeci(day))
  }

  decoHMS(hour, minute, second) {
    return this.dh
      ? ((padDeci(hour) |> this.dh(hour)) + RT +
        (padDeci(minute) |> this.ds(minute)) + RT +
        (padDeci(second) |> this.ds(second)))
      : (padDeci(hour) + RT + padDeci(minute) + RT + padDeci(second))
  }

  decoMilli(milli) {
    return this.dt
      ? (padMilli(milli) |> this.dt(milli))
      : (padMilli(milli))
  }
}