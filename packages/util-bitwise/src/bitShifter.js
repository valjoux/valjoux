export const readYear = int => int >> 9 & 0xffff
export const readMonth = int => int >> 5 & 0xf
export const readDay = int => int & 0x1f

export const readYearMonth = int => [(int = int >> 5) >> 4 & 0xffff, int & 0xf]

export const bitYear = year => (year & 0xffff) << 9
export const bitMonth = month => (month & 0xf) << 5
export const bitDay = day => day & 0x1f
