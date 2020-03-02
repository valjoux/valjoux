export const padMilli = ms => (ms = '' + ms).length > 2 ? ms : ('00' + ms).slice(-3)
