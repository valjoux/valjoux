/**
 *
 * @param {number} month
 * @param {boolean} isLeap
 * @returns {*}
 */
const monthDays = (month, isLeap) => month === 0x2 ? 28 + isLeap : 30 + month % 0x2 ^ month >= 0x8;

export { monthDays };
