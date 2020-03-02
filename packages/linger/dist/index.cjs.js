'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var timeout = require('@valjoux/timeout');

const linger = (ms, fn, ...args) => new Promise((pass, veto) => {
  let st = false,
      rs;
  Promise.resolve(fn.apply(null, args)).then(x => st++ ? pass(x) : rs = x, veto);
  Promise.resolve(timeout.timeout(ms)).then(_ => {
    if (st++) pass(rs);
  }, veto);
});

exports.linger = linger;
