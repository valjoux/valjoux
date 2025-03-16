import { DATE_CONFIG } from './dateConfig.js'

/** @type {Intl.DateTimeFormat} */
export const FormatDate = new Intl.DateTimeFormat(undefined, DATE_CONFIG)

export const formatDate = FormatDate.format.bind(FormatDate)




