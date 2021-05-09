import { noop }    from '@ject/noop'
import { FUN }     from '@typen/enum-data-types'
import { _linger } from './linger'

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
      this.ms = props.ms || props.lapse
      this.fn = props.fn || props.method
      this.args = props.args || props.params
      this.ctx = props.ctx || props.context || props.thisArg
    }
  }
  static build(props) { return new AsyncLooper(props) }
  static from(fn, ...args) { return new AsyncLooper({ fn, args }) }
  loop = function* (lapse) {
    const { ctx, ms, fn, args } = this
    yield fn.apply(ctx, args)
    while (true) yield _linger.call(ctx, lapse ?? ms, fn, args)
  }
  async setInterval(ms, cb) {
    for await (const result of this.loop(ms)) {
      if (cb) cb(result)
    }
  }
}