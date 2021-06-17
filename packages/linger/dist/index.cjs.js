'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var timeout = require('@valjoux/timeout');
var noop = require('@ject/noop');
var enumDataTypes = require('@typen/enum-data-types');

function linger(ms, fn, ...args) {
  return awaitToPromise.call(this, ms, fn, args);
}
function awaitToPromise(ms, fn, args) {
  const self = this;
  return new Promise((pass, veto) => {
    let st = false,
        rs;
    Promise.resolve(fn.apply(self, args)).then(x => st++ ? pass(x) : rs = x, veto);
    Promise.resolve(timeout.timeout(ms)).then(_ => {
      if (st++) pass(rs);
    }, veto);
  });
}

class AsyncLooper {
  constructor(props) {
    this.ms = 0;
    this.fn = noop.noop;
    this.args = null;
    this.ctx = null;

    if (typeof props === enumDataTypes.FUN) {
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

  *loop(ms) {
    const {
      ctx,
      ms: thisMs,
      fn,
      args
    } = this;
    yield fn.apply(ctx, args);

    while (true) yield awaitToPromise.call(ctx, ms ?? thisMs, fn, args);
  }

  async setInterval(ms, pipe) {
    for await (const result of this.loop(ms)) {
      if (pipe) pipe(result);
    }
  }

}

exports.AsyncLooper = AsyncLooper;
exports.linger = linger;
