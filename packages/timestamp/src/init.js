import { formatDateTime } from '@valjoux/format-date-time'
import { formatTime } from '@valjoux/format-time'
import { dateToDash } from '@valjoux/convert'
import { padMilli } from '../utils/padMilli'

/** @returns {number} - YYYY */
export const year = (date = new Date()) => date.getFullYear()

/** @return  {string} - YYYY-MM-DD */
export const today = (dash = '-') => dateToDash(new Date(), dash)

/** @returns {string} - hh:mm:ss */
export const roughly = (date = new Date()) => date |> formatTime

/** @return {string} - hh:mm:ss */
export const roughlyNow = () => new Date() |> formatTime

/** @returns {string} - hh:mm:ss.mmm */
export const time = (date = new Date()) => `${formatTime(date)}.${(date.getMilliseconds() |> padMilli)}`

/** @return {string} - hh:mm:ss.mmm */
export const now = () => new Date() |> time

/** @return  {string} - mm/dd/yy, hh:mm:ss */
export const dateTime = (date = new Date()) => date |> formatDateTime

/** @return  {string} - mm/dd/yy, hh:mm:ss */
export const present = () => new Date() |> formatDateTime


