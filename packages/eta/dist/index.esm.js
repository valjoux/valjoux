const NUMERIC = 'numeric';
/**
 *
 * @type {Intl.DateTimeFormat}
 */

const tf = new Intl.DateTimeFormat(undefined, {
  hour: NUMERIC,
  minute: NUMERIC,
  second: NUMERIC,
  hour12: false
});
const format = tf.format.bind(tf);
class Eta {
  constructor() {
    this.c = new Date();
    this.p = 0;
  }

  tick() {
    return this.p = this.c, this.c = new Date(), this.c - this.p;
  }

  ini(msg = '') {
    return `[${format(this.c)}] [Ini 0ms] ${msg}`;
  }

  lap(msg = '') {
    return `[${format(this.c)}] [Lap ${this.tick()}ms] ${msg}`;
  }

  end(msg = '') {
    return `[${format(this.c)}] [End ${this.tick()}ms] ${msg}`;
  }

}

export { Eta };
