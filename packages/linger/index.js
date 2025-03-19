import { overtime, intime, ontime } from '@valjoux/timeout';
import { Chore } from '@ject/chore';
import { noop } from '@ject/noop';
import { OBJ, FUN } from '@typen/enum-data-types';
import { iterate } from '@vect/vector-mapper';

function linger(ms, fn, arg, df) {
  const timing = this?.timing ?? overtime;
  return timing(ms, fn, arg, df)
}

class Escape {
  instant = true
  on = true
  constructor(conf, mode) {
    this.conf = {
      fn: typeof conf === OBJ ? Chore.create(conf).caller // use { fn, arg, ctx, mode } from conf
        : typeof conf === FUN ? conf
          : noop,
      df: conf?.df
    };
    this.mode = mode ?? 'ontime';
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

  get continue() { return this.on }
  set continue(value) { return this.on = value }

  set default(value) { this.conf.df = value; }

  async setInterval(ms, pipe) {
    for await (const result of this.loop(ms))
      if (pipe && this.on) pipe(result);
  }

  * loop(ms) {
    const { fn, df } = this.conf;
    if (typeof fn === FUN) {
      if (this.instant && this.on) {
        yield intime(ms, fn, null, df);
      }
      while (this.on) {
        yield this.timing(ms, fn, null, df);
      }
      return void 0
    }
  }
}

function* infinite(vec) {
  const hi = vec.length;
  let lo = 0;
  while (true) {
    yield vec[lo++];
    if (lo === hi) {lo = 0;}
  }
}

class Cylinder {
  collection = []
  instant = true
  on = true
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
    );
    this.mode = mode ?? 'ontime';
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

  get continue() { return this.on }
  set continue(value) { return this.on = value }

  set default(value) { for (let conf of this.collection) conf.df = value; }

  async setInterval(ms, pipe) { for await (const result of this.loop(ms)) if (pipe && this.on) pipe(result); }
  * loop(ms) {
    const cylinder = infinite(this.collection);
    if (this.instant && this.on) {
      const { value: { fn } } = cylinder.next();
      yield fn();
    }
    while (this.on) {
      const { value: { fn, df } } = cylinder.next();
      yield this.timing(typeof ms === FUN ? ms() : ms, fn, null, df);
    }
    return void 0
  }
}

export { Cylinder, Escape, linger };
