import { TIME_CONFIG } from './timeConfig.js'

/** @type {Intl.DateTimeFormat} */
export const FormatTime = new Intl.DateTimeFormat(undefined, TIME_CONFIG)

export const formatTime = FormatTime.format.bind(FormatTime)
