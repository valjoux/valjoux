import { Chore }                    from '@ject/chore'
import { noop }                     from '@ject/noop'
import { FUN, OBJ }                 from '@typen/enum-data-types'
import { intime, ontime, overtime } from './timings'

export class Escape {
  instant = true
  constructor(conf, mode) {
    this.conf = {
      fn: typeof conf === OBJ ? Chore.create(conf).caller // use { fn, arg, ctx, mode } from conf
        : typeof conf === FUN ? conf
          : noop,
      df: conf?.df
    }
    this.mode = mode ?? 'ontime'
  }
  static build(props) { return new Escape(props) }
  static from(fn, ...args) { return new Escape({ fn, args }) }

  get mode() { return this.timing.name }
  set mode(val) {
    if (val === 'intime') { return this.timing = intime }
    if (val === 'ontime') { return this.timing = ontime }
    if (val === 'overtime') { return this.timing = overtime }
    return this.timing = ontime
  }
  set default(value) { this.conf.df = value }

  async setInterval(ms, pipe) {
    for await (const result of this.loop(ms)) {
      if (pipe) pipe(result)
    }
  }
  * loop(ms) {
    const { fn, df } = this.conf
    if (typeof fn === FUN) {
      if (this.instant) {
        yield intime(ms, fn, null, df)
      }
      while (true) {
        yield this.timing(ms, fn, null, df)
      }
    }
  }
}

