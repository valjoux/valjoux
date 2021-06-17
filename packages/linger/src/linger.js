import { timeout } from '@valjoux/timeout'

export function linger(ms, fn, ...args) {
  return awaitToPromise.call(this, ms, fn, args)
}

export function awaitToPromise(ms, fn, args) {
  const self = this
  return new Promise((pass, veto) => {
    let st = false, rs
    Promise
      .resolve(fn.apply(self, args))
      .then(x => st++ ? pass(x) : rs = x, veto)
    Promise
      .resolve(timeout(ms))
      .then(_ => { if (st++) pass(rs) }, veto)
  })
}

