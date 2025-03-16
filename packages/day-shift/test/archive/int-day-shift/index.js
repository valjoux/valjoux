import { forwardDays } from './forwardDays.js'
import { backwardDays } from './backwardDays.js'

export const intDayShift = (int, dif) => {
  if (dif > 0) return forwardDays(int, dif)
  if (dif < 0) return backwardDays(int, dif)
  return int
}
