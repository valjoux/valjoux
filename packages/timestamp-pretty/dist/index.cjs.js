'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var projector = require('@palett/projector');
var enumChars = require('@spare/enum-chars');
var presets = require('@palett/presets');

const padDeci = x => x >= 10 ? '' + x : '0' + x;

const padKilo = x => x >= 1000 ? '' + x : ('' + x).padStart(4, '0');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);

class Timestamp {
  constructor(datePreset, timePreset, milliPreset) {
    if (datePreset) {
      this.dy = projector.Colorant({
        min: 1990,
        max: 2030
      }, datePreset);
      this.dm = projector.Colorant({
        min: 1,
        max: 12
      }, datePreset);
      this.dd = projector.Colorant({
        min: 1,
        max: 31
      }, datePreset);
    }

    if (timePreset) {
      this.dh = projector.Colorant({
        min: 0,
        max: 23
      }, timePreset);
      this.ds = projector.Colorant({
        min: 0,
        max: 59
      }, timePreset);
    }

    if (milliPreset) {
      this.dt = projector.Colorant({
        min: 0,
        max: 999
      }, milliPreset);
    }
  }

  static build(datePreset = presets.METRO, timePreset = presets.SUBTLE, milliPreset = presets.SUBTLE) {
    return new Timestamp(datePreset, timePreset, milliPreset);
  }
  /** @param {Date} dt */


  date(dt) {
    return this.decoYMD(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
  }
  /** @param {Date} dt */


  roughTime(dt) {
    return this.decoHMS(dt.getHours(), dt.getMinutes(), dt.getSeconds());
  }
  /** @param {Date} dt */


  time(dt) {
    return this.roughTime(dt) + '.' + this.decoMilli(dt.getMilliseconds());
  }
  /** @param {Date} dt */


  dateTime(dt) {
    return this.date(dt) + enumChars.QT + this.roughTime(dt);
  }

  decoYMD(year, month, day) {
    var _padKilo, _padDeci, _padDeci2;

    return this.dy ? (_padKilo = padKilo(year), this.dy(year)(_padKilo)) + enumChars.DASH + (_padDeci = padDeci(month), this.dm(month)(_padDeci)) + enumChars.DASH + (_padDeci2 = padDeci(day), this.dd(day)(_padDeci2)) : padKilo(year) + enumChars.DASH + padDeci(month) + enumChars.DASH + padDeci(day);
  }

  decoHMS(hour, minute, second) {
    var _padDeci3, _padDeci4, _padDeci5;

    return this.dh ? (_padDeci3 = padDeci(hour), this.dh(hour)(_padDeci3)) + enumChars.RT + (_padDeci4 = padDeci(minute), this.ds(minute)(_padDeci4)) + enumChars.RT + (_padDeci5 = padDeci(second), this.ds(second)(_padDeci5)) : padDeci(hour) + enumChars.RT + padDeci(minute) + enumChars.RT + padDeci(second);
  }

  decoMilli(milli) {
    var _padMilli;

    return this.dt ? (_padMilli = padMilli(milli), this.dt(milli)(_padMilli)) : padMilli(milli);
  }

}

const timestamp = Timestamp.build();
/** @type {Function} */

const date = timestamp.date.bind(timestamp);
/** @type {Function} */

const time = timestamp.time.bind(timestamp);
/** @type {Function} */

const roughTime = timestamp.roughTime.bind(timestamp);
/** @type {Function} */

const dateTime = timestamp.dateTime.bind(timestamp);

exports.Timestamp = Timestamp;
exports.date = date;
exports.dateTime = dateTime;
exports.roughTime = roughTime;
exports.time = time;
