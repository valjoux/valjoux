'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isLeap = y => !(y % 4) && !!(y % 100) || !(y % 400);

const bigMonth = m => m % 2 ^ m >= 8;

/**
 *
 * @param {*} [y]
 * @param {*} m
 * @param {boolean} [islp]
 * @returns {*}
 */

const monthDays = (y, m, islp) => m === 0x2 ? 28 + (islp !== null && islp !== void 0 ? islp : isLeap(y)) : 30 + bigMonth(m);

const seasonLast = m => ~~((m - 1) / 3 + 1) * 3;

exports.bigMonth = bigMonth;
exports.monthDays = monthDays;
exports.seasonLast = seasonLast;
