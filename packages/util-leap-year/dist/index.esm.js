const isLeap = y => !(y % 4) && !!(y % 100) || !(y % 400);

export { isLeap };
