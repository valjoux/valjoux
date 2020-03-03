'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var formatDateTime = require('@valjoux/format-date-time');
var formatTime = require('@valjoux/format-time');
var convert = require('@valjoux/convert');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);

/** @returns {number} - YYYY */

const year = (date = new Date()) => date.getFullYear();
/** @return  {string} - YYYY-MM-DD */

const today = (dash = '-') => convert.dateToDash(new Date(), dash);
/** @returns {string} - hh:mm:ss */

const roughly = (date = new Date()) => {
  var _date;

  return _date = date, formatTime.formatTime(_date);
};
/** @return {string} - hh:mm:ss */

const roughlyNow = () => {
  var _ref;

  return _ref = new Date(), formatTime.formatTime(_ref);
};
/** @returns {string} - hh:mm:ss.mmm */

const time = (date = new Date()) => {
  var _date$getMilliseconds;

  return `${formatTime.formatTime(date)}.${(_date$getMilliseconds = date.getMilliseconds(), padMilli(_date$getMilliseconds))}`;
};
/** @return {string} - hh:mm:ss.mmm */

const now = () => {
  var _ref2;

  return _ref2 = new Date(), time(_ref2);
};
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const dateTime = (date = new Date()) => {
  var _date2;

  return _date2 = date, formatDateTime.formatDateTime(_date2);
};
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const present = () => {
  var _ref3;

  return _ref3 = new Date(), formatDateTime.formatDateTime(_ref3);
};

exports.dateTime = dateTime;
exports.now = now;
exports.present = present;
exports.roughly = roughly;
exports.roughlyNow = roughlyNow;
exports.time = time;
exports.today = today;
exports.year = year;
