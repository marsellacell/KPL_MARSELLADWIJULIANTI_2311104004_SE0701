// matematikaLibraries.js

function FPB(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function KPK(a, b) {
    return (a * b) / FPB(a, b);
  }
  
  function Turunan(persamaan) {
    const turunan = persamaan.map((coef, idx) => {
      const pangkat = persamaan.length - idx - 1;
      if (pangkat === 0) return null;
      const hasil = coef * pangkat;
      const pangkatBaru = pangkat - 1;
      return hasil + (pangkatBaru > 0 ? `x${pangkatBaru > 1 ? pangkatBaru : ""}` : "");
    }).filter(Boolean);
    return turunan.join(" + ").replace(/\+\s-\s/g, "- ");
  }
  
  function Integral(persamaan) {
    const integral = persamaan.map((coef, idx) => {
      const pangkat = persamaan.length - idx - 1;
      const pangkatBaru = pangkat + 1;
      const hasil = (coef / pangkatBaru).toFixed(2).replace(/\.00$/, '');
      return hasil + `x${pangkatBaru > 1 ? pangkatBaru : ""}`;
    });
    return integral.join(" + ").replace(/\+\s-\s/g, "- ") + " + C";
  }
  
  module.exports = { FPB, KPK, Turunan, Integral };
  