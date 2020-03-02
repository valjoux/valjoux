import { Eta } from '@valjoux/eta'
import { now } from '@valjoux/timestamp'
import { round } from '@aryth/math'
import { CrosTab } from '@analys/crostab'
import { iso as isoX } from '@vect/matrix-init'
import { fluoVector } from '@palett/fluo-vector'
import { mapper as mapperColumns } from '@vect/columns-mapper'

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
export function strategies ({
  repeat,
  candidates,
  methods,
  showAverage = true,
  showParams = true,
}) {
  const eta = new Eta(),
    fname = Object.keys(methods), functions = Object.values(methods),
    ents = Object.entries(candidates),
    h = ents.length, w = fname.length,
    tmx = isoX(h, w, 0), vmx = isoX(h, w, null)
  eta.ini()
  for (let i = 0, cname, params; i < h; i++) {
    [cname, params] = ents[i], progressLogger(i, cname, fname, repeat)
    eta.tick()
    for (let j = 0, vrow = vmx[i], trow = tmx[i]; j < w; j++) {
      vrow[j] = rep(repeat, functions[j], params)
      trow[j] = eta.tick()
    }
  }
  const crostab = new CrosTab(Object.keys(candidates), fname, [[]])
  let [lapse, result] = [
    crostab.copy({ rows: tmx, title: 'lapse' }),
    crostab.copy({ rows: vmx, title: 'result' })
  ]
  if (showAverage) lapse.unshiftRow('average', fluoVector(mapperColumns(tmx, average)))
  if (showParams) result.unshiftColumn('input', Object.values(candidates))
  return { lapse, result }
}

const rep = (r, func, params) => {
  for (--r; r > 0; r--) func.apply(null, params)
  return func.apply(null, params)
}

const progressLogger = (index, cname, fname, repeat) => {
  `[${now()}] [${index}] (${cname}) tested by [${fname}], repeated * ${repeat}.` |> console.log
}

const average = nums => round(nums.reduce((a, b) => a + b, 0) / nums.length)
