import { formatTime } from '@valjoux/format-time'

export class Eta {
  constructor () {
    this.c = new Date()
    this.p = 0
  }

  tick () { return this.p = this.c, this.c = new Date(), this.c - this.p }

  ini (msg = '') { return `[${formatTime(this.c)}] [Ini 0ms] ${msg}` }
  lap (msg = '') { return `[${formatTime(this.c)}] [Lap ${this.tick()}ms] ${msg}` }
  end (msg = '') { return `[${formatTime(this.c)}] [End ${this.tick()}ms] ${msg}` }
}
