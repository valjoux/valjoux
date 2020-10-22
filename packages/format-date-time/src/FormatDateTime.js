import { DATE_CONFIG } from '@valjoux/format-date'
import { TIME_CONFIG } from '@valjoux/format-time'

/** @type {Intl.DateTimeFormat} */
export const FormatDateTime = new Intl.DateTimeFormat(undefined, {
  ...DATE_CONFIG,
  ...TIME_CONFIG
})

export const formatDateTime = FormatDateTime.format.bind(FormatDateTime)

export { DATE_CONFIG, TIME_CONFIG }
