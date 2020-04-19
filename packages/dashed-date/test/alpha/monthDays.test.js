import { says }      from '@spare/logger'
import { monthDays } from '../src/utils/monthDays'

const candidates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

for (let candidate of candidates) {
  monthDays(2020, candidate) |> says[candidate]
}
