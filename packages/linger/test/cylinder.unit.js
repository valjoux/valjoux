import { randBetw } from '@aryth/rand'
import { says }     from '@palett/says'
import { AEU }      from '@spare/enum-chars'
import { decoFlat } from '@spare/logger'
import { time }     from '@valjoux/timestamp-pretty'
import { mapper }   from '@vect/object-mapper'
import si           from 'systeminformation'
import { linger }   from '../dist/index.esm'
import { Cylinder } from '../src/Cylinder'

says['processes'].attach(time)

async function mem() {
  return mapper(await si.mem(), n => ( n / 1024 ) >> 10)
}

async function lazyRand(lo, hi) {
  return linger(800, function getRand() { return randBetw(lo, hi) })
}

const cylinder = Cylinder.from({ fn: lazyRand, arg: [ 10, 20 ] }, si.cpuCurrentSpeed, si.cpuTemperature, mem, lazyRand)
cylinder.default = AEU
cylinder
  .setInterval(randBetw.bind(null, 1000, 1500), data => data |> decoFlat |> says['processes'])
  .then()
