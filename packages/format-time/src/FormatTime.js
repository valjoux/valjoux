import { TIME_CONFIG } from './timeConfig'

/** @type {Intl.DateTimeFormat} */
export const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG)

export const formatTime = FormatTime.format.bind(FormatTime)
