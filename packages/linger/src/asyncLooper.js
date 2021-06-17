import { noop }           from '@ject/noop'
import { FUN }            from '@typen/enum-data-types'
import { timeout }        from '@valjoux/timeout/src/timeout'
import { awaitToPromise } from './linger'

export class AsyncLooper {
  ms = 0
  fn = noop
  args = null
  ctx = null
  constructor(props) {
    if (typeof props === FUN) { // (props && props.constructor && props.call && props.apply)
      this.fn = props
    }
    else {
      this.ms = props.ms ?? props.lapse
      this.fn = props.fn ?? props.method ?? props.func
      this.args = props.args ?? props.params ?? [ props.arg ?? props.param ]
      this.ctx = props.ctx ?? props.context ?? props.thisArg
    }
  }
  static build(props) { return new AsyncLooper(props) }
  static from(fn, ...args) { return new AsyncLooper({ fn, args }) }
  * loop(ms) {
    const { ctx, ms: thisMs, fn, args } = this
    if (typeof fn === FUN) {
      yield fn.apply(ctx, args)
      while (true) yield awaitToPromise.call(ctx, ms ?? thisMs, fn, args)
    }
    else {
      yield void 0
      while (true) yield timeout(ms)
    }
  }
  async setInterval(ms, pipe) {
    for await (const result of this.loop(ms)) {
      if (pipe) pipe(result)
    }
  }
}