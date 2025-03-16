import { padD2, padD4 } from './padDigits.js'

export const dashify = (y, m, d, de = '-') => padD4(y) + de + padD2(m) + de + padD2(d)


