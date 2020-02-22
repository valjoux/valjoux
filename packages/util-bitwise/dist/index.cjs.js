'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const readYear = int => int >> 9 & 0xffff;
const readMonth = int => int >> 5 & 0xf;
const readDay = int => int & 0x1f;
const readYearMonth = int => [(int = int >> 5) >> 4 & 0xffff, int & 0xf];
const bitYear = year => (year & 0xffff) << 9;
const bitMonth = month => (month & 0xf) << 5;
const bitDay = day => day & 0x1f;

exports.bitDay = bitDay;
exports.bitMonth = bitMonth;
exports.bitYear = bitYear;
exports.readDay = readDay;
exports.readMonth = readMonth;
exports.readYear = readYear;
exports.readYearMonth = readYearMonth;
