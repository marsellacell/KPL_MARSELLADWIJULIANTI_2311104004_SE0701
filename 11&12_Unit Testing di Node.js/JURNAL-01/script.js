function CariNilaiPangkat(a, b) {
  // Aturan Khusus
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;
    if (hasil > Number.MAX_SAFE_INTEGER) return -3; // Simulasi overflow
  }
  return hasil;
}

function hitungPangkat() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("outputHasil").innerText = `Hasil: ${hasil}`;
}
