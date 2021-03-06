import { dateToDash } from '@valjoux/convert';
import { formatDateTime } from '@valjoux/format-date-time';
import { formatTime } from '@valjoux/format-time';

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);
const milli = date => padMilli(date.getMilliseconds());

/** @return  {string} - YYYY-MM-DD */

const date = (dt = new Date(), dash = '-') => dateToDash(dt, dash);
/** @returns {string} - hh:mm:ss */

const roughTime = (date = new Date()) => formatTime(date);
/** @returns {string} - hh:mm:ss.mmm */

const time = (date = new Date()) => formatTime(date) + '.' + milli(date);
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const dateTime = (date = new Date()) => formatDateTime(date);
/** @returns {number} - YYYY */

const year = (date = new Date()) => date.getFullYear();
/**
 * @return  {string} - YYYY-MM-DD
 * @deprecated use date() instead
 */

const today = (dash = '-') => dateToDash(new Date(), dash);
/**
 * @returns {string} - hh:mm:ss
 * @deprecated use roughTime() instead
 * */

const roughly = (date = new Date()) => formatTime(date);
/**
 * @return {string} - hh:mm:ss
 * @deprecated use roughTime() instead
 * */

const roughlyNow = () => formatTime(new Date());
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

const present = () => formatDateTime(new Date());

export { date, dateTime, now, present, roughTime, roughly, roughlyNow, time, today, year };
