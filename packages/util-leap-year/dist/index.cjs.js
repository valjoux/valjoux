'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isLeap = y => !(y % 4) && !!(y % 100) || !(y % 400);

exports.isLeap = isLeap;
