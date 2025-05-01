import { akarPersamaanKuadrat, hasilKuadrat } from "./aljabarLibraries.js";

try {
  const akar = akarPersamaanKuadrat([1, -3, -10]);
  console.log("Akar-akar persamaan: ", akar);
} catch (e) {
  console.error(e.message);
}

const hasil = hasilKuadrat([2, -3]);
console.log("Hasil kuadrat: ", hasil);
