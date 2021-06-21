export function* infinite(vec) {
  const hi = vec.length
  let lo = 0
  while (true) {
    yield vec[lo++]
    if (lo === hi) {lo = 0}
  }
}