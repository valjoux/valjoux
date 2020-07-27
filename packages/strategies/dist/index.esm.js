import { CrosTab } from '@analys/crostab';
import { round } from '@aryth/math';
import { fluoVector } from '@palett/fluo-vector';
import { ros } from '@palett/says';
import { CO } from '@spare/enum-chars';
import { Eta } from '@valjoux/eta';
import { time } from '@valjoux/timestamp';
import { mapper } from '@vect/columns-mapper';
import { iso } from '@vect/matrix-init';

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
  const eta = new Eta(),
        functionNames = Object.keys(methods),
        prettyNames = functionNames.map(x => ros(x)).join(CO),
        functions = Object.values(methods),
        entries = Object.entries(candidates),
        h = entries.length,
        w = functionNames.length,
        tmx = iso(h, w, 0),
        vmx = iso(h, w, undefined);
  eta.ini();

  for (let i = 0, cname, params; i < h; i++) {
    [cname, params] = entries[i], progressLogger(i, cname, prettyNames, repeat);
    eta.tick();

    for (let j = 0, vrow = vmx[i], trow = tmx[i]; j < w; j++) {
      vrow[j] = rep(repeat, functions[j], params);
      trow[j] = eta.tick();
    }
  }

  const crostab = new CrosTab(Object.keys(candidates), functionNames, [[]]);
  let [lapse, result] = [crostab.copy({
    rows: tmx,
    title: 'lapse'
  }), crostab.copy({
    rows: vmx,
    title: 'result'
  })];
  if (showAverage) lapse.unshiftRow('average', fluoVector(mapper(tmx, average)));
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

  _ref = `[${time()}] [${index}] (${cname}) tested by [${names}], repeated * ${repeat}.`, console.log(_ref);
};

const average = nums => round(nums.reduce((a, b) => a + b, 0) / nums.length);

export { strategies };
