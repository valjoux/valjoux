import { says }           from '@palett/says'
import { monthToQuarter } from '../src/monthToQuarter.js'

export const test = () => {
  const candidates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  for (let candidate of candidates) {
    monthToQuarter(candidate) |> says[candidate]
  }
}

test()
