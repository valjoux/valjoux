import { AZURE, METRO, SUBTLE } from '@palett/presets'
import { init }                 from '@vect/vector'
import { delogger, logger }     from '@spare/logger'
import { timeout }              from '@valjoux/timeout'
import { rand, randBetw }       from '@aryth/rand'
import { dateTime }             from '../index'
import { Timestamp }            from '../src/Timestamp'


const timestamp = Timestamp.build(
  AZURE,
  METRO,
  SUBTLE, //SUBTLE
)

const ticks = init(16, x => x)

ticks |> delogger

const randDate = () => new Date(
  randBetw(800, 2030),
  rand(12),
  randBetw(1, 31),
  rand(23),
  rand(60),
  rand(60),
  rand(1000)
)

const testDate = async () => {
  for (let tick of ticks) {
    timestamp.date(randDate()) |> logger
    await timeout(200)
  }
}
const testTime = async () => {
  for (let tick of ticks) {
    timestamp.time(randDate()) |> logger
    await timeout(200)
  }
}
const testDateTime = async () => {
  for (let tick of ticks) {
    dateTime(randDate()) |> logger
    await timeout(200)
  }
}

const test = async () => {
  // await testDate().then()
  // await testTime().then()
  await testDateTime().then()
}

test()