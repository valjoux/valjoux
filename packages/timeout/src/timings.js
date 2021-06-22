import { valid }   from '@typen/nullish'
import { timeout } from '../dist/index.esm'

export function overtime(ms, arg, fn) {
  return new Promise((pass, veto) => {
    let st = 0, rs
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => st++ ? pass(x) : rs = x, veto)
    Promise.resolve(timeout(ms)).then(() => st++ ? pass(rs) : void 0, veto)
  })
}

// wait for at most ms and return value or default. (immediate or no later than ontime time)
export function intime(ms, fn, arg, df) {
  return new Promise((pass, veto) => {
    let rs = df
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => pass(rs = x), veto)
    Promise.resolve(timeout(ms)).then(() => pass(rs), veto)
  })
}

// wait for exact ms and return value or default. (at ontime time)
export function ontime(ms, fn, arg, df) {
  return new Promise((pass, veto) => {
    let st = 0, rs
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => ( rs = x, st++ ), veto)
    Promise.resolve(timeout(ms)).then(() => pass(st ? rs : df), veto)
  })
}