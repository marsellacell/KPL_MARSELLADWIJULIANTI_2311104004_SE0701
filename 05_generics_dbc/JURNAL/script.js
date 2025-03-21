class Penjumlahan {
    jumlahTigaAngka(a, b, c) {
        let result = 0;
        result += a;
        result += b;
        result += c;
        return result;
    }
}

const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.jumlahTigaAngka(23.0, 11.0, 4.0); // Menggunakan tipe data double
console.log(`Hasil penjumlahan: ${hasil}`);