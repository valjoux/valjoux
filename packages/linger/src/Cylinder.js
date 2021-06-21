import { FUN, OBJ }                 from '@typen/enum-data-types'
import { iterate }                  from '@vect/vector-mapper'
import { infinite }                 from './infinite'
import { intime, ontime, overtime } from './timings'

export class Cylinder {
  collection = []
  instant = true
  constructor(configs, mode) {
    iterate(configs, (conf, i) => {
      if (Array.isArray(conf)) {
        const [ fn, args, ctx, df ] = conf
        this.collection[i] = { key: fn?.name ?? i, fn, args, ctx, df }
      }
      else if (typeof conf === OBJ) {
        const { fn, args, ctx, df } = conf
        this.collection[i] = { key: fn?.name ?? i, fn, args, ctx, df }
      }
      else if (typeof conf === FUN) {
        const fn = conf
        this.collection[i] = { key: fn?.name ?? i, fn }
      }
      else {
        this.collection[i] = { key: i, fn: null }
      }
    })
    this.mode = mode ?? 'ontime'
  }
  static build(props) { return new Cylinder(props) }
  static from(...methods) { return new Cylinder(methods) }

  get mode() { return this.timing.name }
  set mode(val) {
    if (val === 'intime') { return this.timing = intime }
    if (val === 'ontime') { return this.timing = ontime }
    if (val === 'overtime') { return this.timing = overtime }
    return this.timing = ontime
  }
  set default(value) { for (let conf of this.collection) conf.df = value }

  async setInterval(ms, pipe) {
    for await (const result of this.loop(ms)) {
      if (pipe) pipe(result)
    }
  }
  * loop(ms) {
    const vec = infinite(this.collection)
    if (this.instant) {
      const { value: { fn, args, ctx, df } } = vec.next()
      yield intime.call(ctx, ms, fn, args, df)
    }
    while (true) {
      const { value: { fn, args, ctx, df } } = vec.next()
      yield this.timing.call(ctx, ms, fn, args, df)
    }
  }


}