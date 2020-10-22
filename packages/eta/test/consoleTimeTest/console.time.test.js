import { timeout } from '@valjoux/timeout'

console.time('100-elements')
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements')

const test = async () => {
  console.time('process')
  await timeout(1000)
  console.timeLog('process', 1000)
  // 打印 "process: 365.227ms 42"。
  await timeout(1000)
  console.timeEnd('process')
}

test()