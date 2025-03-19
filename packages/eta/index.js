import { SUBTLE } from '@palett/presets';
import { time } from '@valjoux/timestamp';
import { Timestamp } from '@valjoux/timestamp-pretty';

class Eta {
  constructor({ formatter } = {}) {
    this.c = new Date();
    this.p = 0;
    this.d = 0;
    this.ft = formatter ?? time;
  }

  tick() { return this.p = this.c, this.c = new Date(), this.d = this.c - this.p }

  ini(msg = '') { return this.tick(), `${ this.ft(this.c) } [ini 0ms] ${ msg }` }
  lap(msg = '') { return this.tick(), `${ this.ft(this.c) } [lap ${ this.d }ms] ${ msg }` }
  end(msg = '') { return this.tick(), `${ this.ft(this.c) } [end ${ this.d }ms] ${ msg }` }

  static build() { return new Eta() }

  static buildPretty(timePreset = SUBTLE, milliPreset = SUBTLE) {
    const timestamp = Timestamp.build(undefined, timePreset, milliPreset);
    const formatter = timestamp.time.bind(timestamp);
    return new Eta({ formatter })
  }


}

export { Eta };
