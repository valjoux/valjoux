import { valid } from '@typen/nullish';

const timeout = ms => new Promise(pass => setTimeout(pass, ms));

// wait for at least ms and return value or default. (immediate or no later than ontime time)
function overtime(ms, fn, arg) {
  return new Promise((pass, veto) => {
    let rs, st = 0;
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => st++ ? pass(x) : rs = x, veto);
    Promise.resolve(timeout(ms)).then(() => st++ ? pass(rs) : void 0, veto);
  })
}

// wait for at most ms and return value or default. (immediate or no later than ontime time)
function intime(ms, fn, arg, df) {
  return new Promise((pass, veto) => {
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => pass(df = x), veto);
    Promise.resolve(timeout(ms)).then(() => pass(df), veto);

  })
}

// wait for exact ms and return value or default. (at ontime time)
function ontime(ms, fn, arg, df) {
  return new Promise((pass, veto) => {
    let rs, st = 0;
    Promise.resolve(valid(arg) ? fn(arg) : fn()).then((x) => ( rs = x, st++ ), veto);
    Promise.resolve(timeout(ms)).then(() => pass(st ? rs : df), veto);
  })
}

export { intime, ontime, overtime, timeout };
