'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var formatTime = require('@valjoux/format-time');

class Eta {
  constructor() {
    this.c = new Date();
    this.p = 0;
  }

  tick() {
    return this.p = this.c, this.c = new Date(), this.c - this.p;
  }

  ini(msg = '') {
    return `[${formatTime.formatTime(this.c)}] [Ini 0ms] ${msg}`;
  }

  lap(msg = '') {
    return `[${formatTime.formatTime(this.c)}] [Lap ${this.tick()}ms] ${msg}`;
  }

  end(msg = '') {
    return `[${formatTime.formatTime(this.c)}] [End ${this.tick()}ms] ${msg}`;
  }

}

exports.Eta = Eta;
