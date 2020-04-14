import { dateToDash }     from '@valjoux/convert'
import { formatDateTime } from '@valjoux/format-date-time'
import { formatTime }     from '@valjoux/format-time'
import { milli }          from '../utils/padMilli'

/** @returns {number} - YYYY */
export const year = (date = new Date()) => date.getFullYear()

/** @return  {string} - YYYY-MM-DD */
export const today = (dash = '-') => dateToDash(new Date(), dash)

/** @returns {string} - hh:mm:ss */
export const roughly = (date = new Date()) => formatTime(date)

/** @return {string} - hh:mm:ss */
export const roughlyNow = () => formatTime(new Date())

/** @returns {string} - hh:mm:ss.mmm */
export const time = (date = new Date()) => formatTime(date) + '.' + milli(date)

/** @return {string} - hh:mm:ss.mmm */
export const now = () => new Date() |> time

/** @return  {string} - mm/dd/yy, hh:mm:ss */
export const dateTime = (date = new Date()) => formatDateTime(date)

/** @return  {string} - mm/dd/yy, hh:mm:ss */
export const present = () => formatDateTime(new Date())

