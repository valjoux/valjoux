import { roundD2 }     from '@aryth/math'
import { says }        from '@palett/says'
import { decoSamples } from '@spare/logger'
import { time }        from '@valjoux/timestamp-pretty'
import { select }      from '@vect/object-select'
import { mutate }      from '@vect/vector-mapper'
import si              from 'systeminformation'
import { Escape }      from '../src/Escape'


says['processes'].attach(time)
const KEYS = [ 'pid', 'parentPid', 'name', 'cpu', 'cpuu', 'cpus', 'mem', 'command', 'path' ]
const escapeTest = Escape.build(si.processes)
const pipe = ({ list }) => {
  list = list.sort(({ cpus: a }, { cpus: b }) => b - a).slice(0, 8)
  mutate(list, sample => {
    sample.cpu = roundD2(sample.cpu * 100)
    sample.cpuu = roundD2(sample.cpuu * 100)
    sample.cpus = roundD2(sample.cpus * 100)
    return select.call(KEYS, sample)
  })
  list |> decoSamples |> says['processes']
}

escapeTest
  .setInterval(3000, pipe)
  .then()