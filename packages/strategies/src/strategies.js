import { fluoVector }    from '@palett/fluo-vector'
import { CO }            from '@spare/enum-chars'
import { ros }           from '@spare/xr'
import { Eta }           from '@valjoux/eta'
import { time }          from '@valjoux/timestamp'
import { columnsMapper } from '@vect/columns-mapper'
import { Crostab }       from '@analyz/crostab'
import { Stat }          from '@vect/vector-stat'
import { indexed }       from '@vect/object-mapper'
import { round }         from '@aryth/math'

/**
 * Cross by candidates and functions, under certain repeat.
 * Each function receives the same list of candidates.
 * @param {number} repeat
 * @param {Object<string,*[]>} candidates - each value is an array of parameters.
 * @param {Object<string,function>} methods
 * @param {boolean} average
 * @param {boolean} showParams
 * @returns {{lapse:Crostab,result:Crostab}}
 */
export function strategies({
                             repeat,
                             candidates,
                             methods,
                             showAverage = true,
                             showParams = false,
                           }) {
  const eta = new Eta()
  const rep = repeater.bind({ repeat })
  const head = Object.keys(methods), wd = head.length
  const crostabL = Crostab.build([], head.slice(), [], 'lapse')
  const crostabR = Crostab.build([], head.slice(), [], 'result')

  let j = 0, rowR, rowL
  const pretty = head.map(ros).join(CO), funcs = Object.values(methods)
  for (let [name, params] of indexed(candidates)) {
    crostabR.sideward.append(name, rowR = Array(wd))
    crostabL.sideward.append(name, rowL = Array(wd))
    logger(crostabR.height, name, pretty, repeat)
    for (eta.tick(), j = 0; j < wd; j++) {
      rowR[j] = rep(funcs[j], params, params.thisArg)
      rowL[j] = eta.tick()
    }
  }

  if (showAverage) crostabL.sideward.prepend('average', fluoVector(columnsMapper(crostabL.rows, col => Stat.average(col)|> round)))
  if (showParams) crostabR.headward.prepend('input', Object.values(candidates))

  return { lapse: crostabL, result: crostabR }
}

function repeater(method, params, thisArg) {
  let { repeat: hi } = this
  for (--hi; hi > 0; hi--) method.apply(thisArg, params)
  return method.apply(thisArg, params)
}

function logger(index, cname, names, repeat) { return console.log(`[${time()}] [${index}] (${cname}) tested by [${names}], repeated * ${repeat}.`) }
