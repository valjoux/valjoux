'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const timeout = ms => new Promise(pass => setTimeout(pass, ms));

exports.timeout = timeout;
