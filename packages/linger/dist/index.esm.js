import { timeout } from '@valjoux/timeout';
import { noop } from '@ject/noop';
import { FUN } from '@typen/enum-data-types';

function linger(ms, fn, ...args) {
  return _linger.call(this, ms, fn, args);
}
function _linger(ms, fn, args) {
  const self = this;
  return new Promise((pass, veto) => {
    let st = false,
        rs;
    Promise.resolve(fn.apply(self, args)).then(x => st++ ? pass(x) : rs = x, veto);
    Promise.resolve(timeout(ms)).then(_ => {
      if (st++) pass(rs);
    }, veto);
  });
}

class AsyncLooper {
  constructor(props) {
    this.ms = 0;
    this.fn = noop;
    this.args = null;
    this.ctx = null;

    this.loop = function* (lapse) {
      const {
        ctx,
        ms,
        fn,
        args
      } = this;
      yield fn.apply(ctx, args);

      while (true) yield _linger.call(ctx, lapse !== null && lapse !== void 0 ? lapse : ms, fn, args);
    };

    if (typeof props === FUN) {
      // (props && props.constructor && props.call && props.apply)
      this.fn = props;
    } else {
      this.ms = props.ms || props.lapse;
      this.fn = props.fn || props.method;
      this.args = props.args || props.params;
      this.ctx = props.ctx || props.context || props.thisArg;
    }
  }

  static build(props) {
    return new AsyncLooper(props);
  }

  static from(fn, ...args) {
    return new AsyncLooper({
      fn,
      args
    });
  }

  async setInterval(ms, cb) {
    for await (const result of this.loop(ms)) {
      if (cb) cb(result);
    }
  }

}

export { AsyncLooper, linger };
