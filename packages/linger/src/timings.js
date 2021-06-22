// import { timeout } from '@valjoux/timeout'
// // wait for at least ms and return value. (no earlier than ontime time)
// //
// export function overtime(ms, fn, args) {
//   return new Promise((pass, veto) => {
//     let st = 0, rs
//     Promise.resolve(fn?.apply(this, args)).then((x) => st++ ? pass(x) : rs = x, veto)
//     Promise.resolve(timeout(ms)).then(() => st++ ? pass(rs) : void 0, veto)
//   })
// }
//
// // wait for at most ms and return value or default. (immediate or no later than ontime time)
// export function intime(ms, fn, args, df) {
//   return new Promise((pass, veto) => {
//     let rs = df
//     Promise.resolve(fn?.apply(this, args)).then((x) => pass(rs = x), veto)
//     Promise.resolve(timeout(ms)).then(() => pass(rs), veto)
//   })
// }
//
// // wait for exact ms and return value or default. (at ontime time)
// export function ontime(ms, fn, args, df) {
//   return new Promise((pass, veto) => {
//     let st = 0, rs
//     Promise.resolve(fn?.apply(this, args)).then((x) => ( rs = x, st++ ), veto)
//     Promise.resolve(timeout(ms)).then(() => pass(st ? rs : df), veto)
//   })
// }
//