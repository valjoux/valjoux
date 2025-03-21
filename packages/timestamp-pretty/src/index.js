import { Timestamp } from './Timestamp.js'

export { Timestamp } from './Timestamp.js'


const timestamp = Timestamp.build()

/** @type {Function} */ export const date = timestamp.date.bind(timestamp)
/** @type {Function} */ export const time = timestamp.time.bind(timestamp)
/** @type {Function} */ export const roughTime = timestamp.roughTime.bind(timestamp)
/** @type {Function} */ export const dateTime = timestamp.dateTime.bind(timestamp)