'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var crostab = require('@analys/crostab');
var math = require('@aryth/math');
var fluoVector = require('@palett/fluo-vector');
var says = require('@palett/says');
var enumChars = require('@spare/enum-chars');
var eta = require('@valjoux/eta');
var timestamp = require('@valjoux/timestamp');
var columnsMapper = require('@vect/columns-mapper');
var matrixInit = require('@vect/matrix-init');

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
  showParams = false
}) {
  const eta$1 = new eta.Eta(),
        functionNames = Object.keys(methods),
        prettyNames = functionNames.map(x => says.ros(x)).join(enumChars.CO),
        functions = Object.values(methods),
        entries = Object.entries(candidates),
        h = entries.length,
        w = functionNames.length,
        tmx = matrixInit.iso(h, w, 0),
        vmx = matrixInit.iso(h, w, undefined);
  eta$1.ini();

  for (let i = 0, cname, params; i < h; i++) {
    [cname, params] = entries[i], progressLogger(i, cname, prettyNames, repeat);
    eta$1.tick();

    for (let j = 0, vrow = vmx[i], trow = tmx[i]; j < w; j++) {
      vrow[j] = rep(repeat, functions[j], params);
      trow[j] = eta$1.tick();
    }
  }

  const crostab$1 = new crostab.CrosTab(Object.keys(candidates), functionNames, [[]]);
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

const progressLogger = (index, cname, names, repeat) => {
  var _ref;

  _ref = `[${timestamp.time()}] [${index}] (${cname}) tested by [${names}], repeated * ${repeat}.`, console.log(_ref);
};

const average = nums => math.round(nums.reduce((a, b) => a + b, 0) / nums.length);

exports.strategies = strategies;
