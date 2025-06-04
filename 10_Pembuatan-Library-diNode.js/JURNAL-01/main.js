// main.js

const { FPB, KPK, Turunan, Integral } = require('./matematikaLibraries');

console.log("FPB dari 60 dan 45:", FPB(60, 45));            // Output: 15
console.log("KPK dari 12 dan 8:", KPK(12, 8));              // Output: 24
console.log("Turunan dari x^3 + 4x^2 -12x + 9:", Turunan([1, 4, -12, 9]));
// Output: 3x2 + 8x - 12
console.log("Integral dari 4x^3 + 6x^2 -12x + 9:", Integral([4, 6, -12, 9]));
// Output: x4 + 2x3 - 6x2 + 9x + C
