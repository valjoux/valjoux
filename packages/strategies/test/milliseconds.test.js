import { performance } from 'node:perf_hooks'
import { test }        from 'node:test'

const quant = 1e8
function functionA() {
  let sum = 0
  for (let i = 0; i < quant; i++) sum += i
  return sum
}

function functionB() {
  let sum = 0
  for (let i = 0; i < quant; i++) sum += Math.sqrt(i)
  return sum
}

// 测量函数执行时间
function measureHook(fn) {
  const start = performance.now()
  fn()
  const end = performance.now()
  return end - start
}

// 测量函数执行时间
function measureHrt(fn) {
  const start = process.hrtime()
  fn()
  const end = process.hrtime(start)
  return end[0] * 1e3 + end[1] / 1e6 // 转换为毫秒
}

test('milliseconds', () => {
// 比较两个函数
  const timeA = measureHrt(functionA)
  const timeB = measureHrt(functionB)

  console.log(`Function A took ${timeA.toFixed(3)} ms`)
  console.log(`Function B took ${timeB.toFixed(3)} ms`)
  console.log(`Difference: ${(timeB - timeA).toFixed(3)} ms`)
})