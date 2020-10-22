'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilLeapYear = require('@valjoux/util-leap-year');

const bigMonth = m => m % 2 ^ m >= 8;

/**
 *
 * @param {*} [y]
 * @param {*} m
 * @param {boolean} [islp]
 * @returns {*}
 */

const monthDays = (y, m, islp) => m === 0x2 ? 28 + (islp !== null && islp !== void 0 ? islp : utilLeapYear.isLeap(y)) : 30 + bigMonth(m);

const seasonLast = m => ~~((m - 1) / 3 + 1) * 3;
const monthToSeason = m => ~~((m - 1) / 3 + 1);

exports.bigMonth = bigMonth;
exports.monthDays = monthDays;
exports.monthToSeason = monthToSeason;
exports.seasonLast = seasonLast;
