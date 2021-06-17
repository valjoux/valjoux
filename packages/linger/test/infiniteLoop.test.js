import { says }        from '@palett/says'
import { decoSamples } from '@spare/logger'
import { time }        from '@valjoux/timestamp-pretty'
import si              from 'systeminformation'
import { AsyncLooper } from '../src/asyncLooper'

says['processes'].attach(time)

const asyncLooper = AsyncLooper.build(si.processes)
asyncLooper
  .setInterval(3000, data => data.list.slice(0, 10) |> decoSamples |> says['processes'])
  .then()