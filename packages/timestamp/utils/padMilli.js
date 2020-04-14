export const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3)

export const milli = date => padMilli(date.getMilliseconds())
