'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');
var timestamp = require('@valjoux/timestamp');
var timestampPretty = require('@valjoux/timestamp-pretty');

class Eta {
  constructor({
    formatter
  } = {}) {
    this.c = new Date();
    this.p = 0;
    this.d = 0;
    this.ft = formatter ?? timestamp.time;
  }

  tick() {
    return this.p = this.c, this.c = new Date(), this.d = this.c - this.p;
  }

  ini(msg = '') {
    return this.tick(), `${this.ft(this.c)} [ini 0ms] ${msg}`;
  }

  lap(msg = '') {
    return this.tick(), `${this.ft(this.c)} [lap ${this.d}ms] ${msg}`;
  }

  end(msg = '') {
    return this.tick(), `${this.ft(this.c)} [end ${this.d}ms] ${msg}`;
  }

  static build() {
    return new Eta();
  }

  static buildPretty(timePreset = presets.SUBTLE, milliPreset = presets.SUBTLE) {
    const timestamp = timestampPretty.Timestamp.build(undefined, timePreset, milliPreset);
    const formatter = timestamp.time.bind(timestamp);
    return new Eta({
      formatter
    });
  }

}

exports.Eta = Eta;
