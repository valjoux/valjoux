'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const DIGIT_2 = '2-digit';
const DATE_CONFIG = {
  year: DIGIT_2,
  month: DIGIT_2,
  day: DIGIT_2
};

/** @type {Intl.DateTimeFormat} */

const FormatDate = new Intl.DateTimeFormat(undefined, DATE_CONFIG);
const formatDate = FormatDate.format.bind(FormatDate);

exports.DATE_CONFIG = DATE_CONFIG;
exports.FormatDate = FormatDate;
exports.formatDate = formatDate;
