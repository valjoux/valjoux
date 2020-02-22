import { belongTo } from '../src/shifters'
import { says, xr } from '@spare/logger'

function belongToTest () {
  const lo = [2019, 12, 31]
  const dt = [2020, 5, 1]
  const hi = [2021, 1, 1]
  const result = belongTo(dt, lo, hi)
  xr()['check if'](dt).p('belongTo')['lo'](lo)['hi'](hi).result(result) |> says.belongTo
}

belongToTest()
