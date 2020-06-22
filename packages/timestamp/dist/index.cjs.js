'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var convert = require('@valjoux/convert');
var formatDateTime = require('@valjoux/format-date-time');
var formatTime = require('@valjoux/format-time');

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);
const milli = date => padMilli(date.getMilliseconds());

/** @return  {string} - YYYY-MM-DD */

const date = (dt = new Date(), dash = '-') => convert.dateToDash(dt, dash);
/** @returns {string} - hh:mm:ss */

const roughTime = (date = new Date()) => formatTime.formatTime(date);
/** @returns {string} - hh:mm:ss.mmm */

const time = (date = new Date()) => formatTime.formatTime(date) + '.' + milli(date);
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const dateTime = (date = new Date()) => formatDateTime.formatDateTime(date);
/** @returns {number} - YYYY */

const year = (date = new Date()) => date.getFullYear();
/**
 * @return  {string} - YYYY-MM-DD
 * @deprecated use date() instead
 */

const today = (dash = '-') => convert.dateToDash(new Date(), dash);
/**
 * @returns {string} - hh:mm:ss
 * @deprecated use roughTime() instead
 * */

const roughly = (date = new Date()) => formatTime.formatTime(date);
/**
 * @return {string} - hh:mm:ss
 * @deprecated use roughTime() instead
 * */

const roughlyNow = () => formatTime.formatTime(new Date());
/**
 * @return {string} - hh:mm:ss.mmm
 * @deprecated use time() instead
 * */

const now = () => {
  var _Date;

  return _Date = new Date(), time(_Date);
};
/**
 * @return  {string} - mm/dd/yy, hh:mm:ss
 * @deprecated use dateTime() instead
 * */

const present = () => formatDateTime.formatDateTime(new Date());

exports.date = date;
exports.dateTime = dateTime;
exports.now = now;
exports.present = present;
exports.roughTime = roughTime;
exports.roughly = roughly;
exports.roughlyNow = roughlyNow;
exports.time = time;
exports.today = today;
exports.year = year;
