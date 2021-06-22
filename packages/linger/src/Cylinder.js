import { Chore }                    from '@ject/chore'
import { noop }                     from '@ject/noop'
import { FUN, OBJ }                 from '@typen/enum-data-types'
import { intime, ontime, overtime } from '@valjoux/timeout'
import { iterate }                  from '@vect/vector-mapper'
import { infinite }                 from './infinite'

export class Cylinder {
  collection = []
  instant = true
  constructor(configs, mode) {
    iterate(
      configs,
      (conf, i) => this.collection[i] = {
        key: conf?.fn?.name ?? i,
        fn: typeof conf === OBJ ? Chore.create(conf).caller // use { fn, arg, ctx, mode } from conf
          : typeof conf === FUN ? conf
            : noop,
        df: conf?.df
      }
    )
    this.mode = mode ?? 'ontime'
  }
  static build(configs, mode) { return new Cylinder(configs, mode) }
  static from(...funcs) { return new Cylinder(funcs) }

  get mode() { return this.timing.name }
  set mode(val) {
    if (val === 'intime') { return this.timing = intime }
    if (val === 'ontime') { return this.timing = ontime }
    if (val === 'overtime') { return this.timing = overtime }
    return this.timing = ontime
  }
  set default(value) { for (let conf of this.collection) conf.df = value }

  async setInterval(ms, pipe) { for await (const result of this.loop(ms)) if (pipe) pipe(result) }
  * loop(ms) {
    const cylinder = infinite(this.collection)
    if (this.instant) {
      const { value: { fn } } = cylinder.next()
      yield fn()
    }
    while (true) {
      const { value: { fn, df } } = cylinder.next()
      yield this.timing(typeof ms === FUN ? ms() : ms, fn, null, df)
    }
  }
}