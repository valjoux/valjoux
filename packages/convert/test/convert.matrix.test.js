import { CrosTab } from 'crostab'
import { DecoCrostab, logger } from '@spare/logger'
import { JUNGLE, METRO } from '@palett/presets'
import { COLUMNWISE } from '@vect/matrix'
import {
  dashToDash, dashToDate, dashToInt, dashToYmd,
  dateToDash, dateToDate, dateToInt, dateToYmd,
  intToDash, intToDate, intToInt, intToYmd,
  ymdToDash, ymdToDate, ymdToInt, ymdToYmd
} from '../src'

const date = new Date()
const dash = date |> dateToDash
const int = date |> dateToInt
const ymd = date |>  dateToYmd

const DATE = 'date', DASH = 'dash', INT = 'int', YMD = 'ymd'

let side, banner = side = [DASH, DATE, INT, YMD]
const matrix = [
  [dash |> dashToDash, dash |> dashToDate, dash |> dashToInt, dash |> dashToYmd,],
  [date |> dateToDash, date |> dateToDate, date |> dateToInt, date |> dateToYmd,],
  [int |> intToDash, int |> intToDate, int |> intToInt, int |> intToYmd,],
  [ymd |> ymdToDash, ymd |> ymdToDate, ymd |> ymdToInt, ymd |> ymdToYmd,],
]

const crostab = CrosTab.from({ side, banner, matrix, title: 'convert' })

crostab |> DecoCrostab({ direct: COLUMNWISE, labelPreset: METRO }) |> logger
