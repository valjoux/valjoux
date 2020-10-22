export const within = (dashed, lo, hi) => (lo.localeCompare(dashed) <= 0) && (dashed.localeCompare(hi) <= 0)
