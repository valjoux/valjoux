import { logger } from '@spare/logger'
import { Eta }    from '../src/Eta.js'

const { timeout } = require('@valjoux/timeout')

export const test = async () => {
  const eta = Eta.buildPretty()
  eta.ini('init') |> logger
  await timeout(1000)
  eta.lap('lapped') |> logger
}

test()