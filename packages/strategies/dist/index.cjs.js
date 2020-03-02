'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var eta = require('@valjoux/eta');
var timestamp = require('@valjoux/timestamp');
var math = require('@aryth/math');
var crostab = require('@analys/crostab');
var matrixInit = require('@vect/matrix-init');
var fluoVector = require('@palett/fluo-vector');
var columnsMapper = require('@vect/columns-mapper');

/**
 * Cross by candidates and functions, under certain repeat.
 * Each function receives the same list of candidates.
 * @param {number} repeat
 * @param {Object<string,*[]>} candidates - each value is an array of parameters.
 * @param {Object<string,function>} methods
 * @param {boolean} average
 * @param {boolean} showParams
 * @returns {{lapse:CrosTab,result:CrosTab}}
 */

function strategies({
  repeat,
  candidates,
  methods,
  showAverage = true,
  showParams = true
}) {
  const eta$1 = new eta.Eta(),
        fname = Object.keys(methods),
        functions = Object.values(methods),
        ents = Object.entries(candidates),
        h = ents.length,
        w = fname.length,
        tmx = matrixInit.iso(h, w, 0),
        vmx = matrixInit.iso(h, w, null);
  eta$1.ini();

  for (let i = 0, cname, params; i < h; i++) {
    [cname, params] = ents[i], progressLogger(i, cname, fname, repeat);
    eta$1.tick();

    for (let j = 0, vrow = vmx[i], trow = tmx[i]; j < w; j++) {
      vrow[j] = rep(repeat, functions[j], params);
      trow[j] = eta$1.tick();
    }
  }

  const crostab$1 = new crostab.CrosTab(Object.keys(candidates), fname, [[]]);
  let [lapse, result] = [crostab$1.copy({
    rows: tmx,
    title: 'lapse'
  }), crostab$1.copy({
    rows: vmx,
    title: 'result'
  })];
  if (showAverage) lapse.unshiftRow('average', fluoVector.fluoVector(columnsMapper.mapper(tmx, average)));
  if (showParams) result.unshiftColumn('input', Object.values(candidates));
  return {
    lapse,
    result
  };
}

const rep = (r, func, params) => {
  for (--r; r > 0; r--) func.apply(null, params);

  return func.apply(null, params);
};

const progressLogger = (index, cname, fname, repeat) => {
  var _ref;

  _ref = `[${timestamp.now()}] [${index}] (${cname}) tested by [${fname}], repeated * ${repeat}.`, console.log(_ref);
};

const average = nums => math.round(nums.reduce((a, b) => a + b, 0) / nums.length);

exports.strategies = strategies;
