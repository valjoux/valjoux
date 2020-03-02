'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const NUMERIC = 'numeric';
const TIME_CONFIG = {
  hour: NUMERIC,
  minute: NUMERIC,
  second: NUMERIC,
  hour12: false
};

/** @type {Intl.DateTimeFormat} */

const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG);
const formatTime = FormatTime.format.bind(FormatTime);

exports.FormatTime = FormatTime;
exports.TIME_CONFIG = TIME_CONFIG;
exports.formatTime = formatTime;
