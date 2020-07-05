import { timeout }                          from '@valjoux/timeout'
import { performance, PerformanceObserver } from 'perf_hooks'

const perfHookTest = async () => {

  const obs = new PerformanceObserver((items) => {
    console.log(items.getEntries()[0].duration)
    performance.clearMarks()
  })
  obs.observe({ entryTypes: ['measure'] })
  performance.measure('Start to Now')

  performance.mark('A')

  performance.measure('A to Now', 'A')
  await timeout(1000)
  performance.mark('B')
  performance.measure('A to B', 'A', 'B')
}

perfHookTest()