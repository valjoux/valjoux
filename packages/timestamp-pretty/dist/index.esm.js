import { dateToDash } from '@valjoux/convert';
import { formatDateTime } from '@valjoux/format-date-time';
import { formatTime } from '@valjoux/format-time';

const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3);
const milli = date => padMilli(date.getMilliseconds());

/** @returns {number} - YYYY */

const year = (date = new Date()) => date.getFullYear();
/** @return  {string} - YYYY-MM-DD */

const today = (dash = '-') => dateToDash(new Date(), dash);
/** @returns {string} - hh:mm:ss */

const roughly = (date = new Date()) => formatTime(date);
/** @return {string} - hh:mm:ss */

const roughlyNow = () => formatTime(new Date());
/** @returns {string} - hh:mm:ss.mmm */

const time = (date = new Date()) => formatTime(date) + '.' + milli(date);
/** @return {string} - hh:mm:ss.mmm */

const now = () => {
  var _Date;

  return _Date = new Date(), time(_Date);
};
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const dateTime = (date = new Date()) => formatDateTime(date);
/** @return  {string} - mm/dd/yy, hh:mm:ss */

const present = () => formatDateTime(new Date());

export { dateTime, now, present, roughly, roughlyNow, time, today, year };
