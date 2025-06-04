export function akarPersamaanKuadrat(persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;
  
    if (diskriminan < 0) {
      throw new Error("Tidak ada akar real");
    }
  
    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
  
    return [akar1, akar2];
  }
  
  export function hasilKuadrat(persamaan) {
    const [a, b] = persamaan;
  
    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;
  
    return [a2, ab2, b2];
  }
  