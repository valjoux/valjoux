export const padKilo = x => x >= 1000 ? '' + x : ('' + x).padStart(4, '0')