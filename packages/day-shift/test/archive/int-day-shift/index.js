import { forwardDays } from './forwardDays'
import { backwardDays } from './backwardDays'

export const intDayShift = (int, dif) => {
  if (dif > 0) return forwardDays(int, dif)
  if (dif < 0) return backwardDays(int, dif)
  return int
}
