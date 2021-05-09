import { decoSamples, logger } from '@spare/logger'
import si                      from 'systeminformation'
import { AsyncLooper }         from '../src/asyncLooper'


const asyncLooper = AsyncLooper.build(si.processes)
asyncLooper.setInterval(3000, data => data.list.slice(0, 10) |> decoSamples |> logger).then()