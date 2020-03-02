'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var formatDate = require('@valjoux/format-date');
var formatTime = require('@valjoux/format-time');

/** @type {Intl.DateTimeFormat} */

const FormatDateTime = new Intl.DateTimeFormat(undefined, { ...formatDate.DATE_CONFIG,
  ...formatTime.TIME_CONFIG
});
const formatDateTime = FormatDateTime.format.bind(FormatDateTime);

Object.defineProperty(exports, 'DATE_CONFIG', {
  enumerable: true,
  get: function () {
    return formatDate.DATE_CONFIG;
  }
});
Object.defineProperty(exports, 'TIME_CONFIG', {
  enumerable: true,
  get: function () {
    return formatTime.TIME_CONFIG;
  }
});
exports.FormatDateTime = FormatDateTime;
exports.formatDateTime = formatDateTime;
