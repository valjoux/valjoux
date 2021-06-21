import { FUN }                      from '@typen/enum-data-types'
import { intime, ontime, overtime } from './timings'

export class Escape {
  instant = true
  constructor(conf, mode) {
    this.conf = typeof conf === FUN
      ? {
        fn: conf
      }
      : {
        fn: conf.fn ?? conf.method ?? conf.func,
        args: conf.args ?? conf.params ?? [ conf.arg ?? conf.param ],
        ctx: conf.ctx ?? conf.context ?? conf.thisArg,
        df: conf.df ?? conf.default
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
    const { fn, args, ctx, df } = this.conf
    if (typeof fn === FUN) {
      if (this.instant) {
        yield intime.call(ctx, ms, fn, args, df)
      }
      while (true) {
        yield this.timing.call(ctx, ms, fn, args, df)
      }
    }
  }
}

