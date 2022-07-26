import { Crostab }       from '@analyz/crostab'
import { round }         from '@aryth/math'
import { fluoVector }    from '@palett/fluo-vector'
import { CO }            from '@spare/enum-chars'
import { ros }           from '@spare/xr'
import { Eta }           from '@valjoux/eta'
import { time }          from '@valjoux/timestamp'
import { columnsMapper } from '@vect/columns-mapper'
import { indexed }       from '@vect/object-mapper'
import { Stat }          from '@vect/vector-stat'

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
                             showPretty = true,
                           }) {
  const eta = new Eta()
  const rep = repeater.bind({ repeat })
  const head = Object.keys(methods), wd = head.length
  const lap = Crostab.build([], head.slice(), [], 'lapse')
  const end = Crostab.build([], head.slice(), [], 'result')

  let j = 0, endRow, lapRow
  const pretty = showPretty ? head.map(ros).join(CO) : head.join(CO)
  const funcs = Object.values(methods)
  for (let [ name, params ] of indexed(candidates)) {
    end.sideward.append(name, endRow = Array(wd))
    lap.sideward.append(name, lapRow = Array(wd))
    logger(end.height, name, pretty, repeat)
    for (eta.tick(), j = 0; j < wd; j++) {
      endRow[j] = rep(funcs[j], params, params.thisArg)
      lapRow[j] = eta.tick()
    }
  }

  if (showAverage) {
    if (showPretty) {
      lap.sideward.prepend('average', fluoVector(columnsMapper(lap.rows, col => Stat.average(col)|> round)))
    }
    else {
      lap.sideward.prepend('average', columnsMapper(lap.rows, col => Stat.average(col)|> round))
    }
  }
  if (showParams) end.headward.prepend('input', Object.values(candidates))

  return { lapse: lap, result: end }
}

function repeater(method, params, thisArg) {
  let { repeat: hi } = this
  for (--hi; hi > 0; hi--) method.apply(thisArg, params)
  return method.apply(thisArg, params)
}

function logger(index, cname, names, repeat) { return console.log(`[${time()}] [${index}] (${cname}) tested by [${names}], repeated * ${repeat}.`) }
