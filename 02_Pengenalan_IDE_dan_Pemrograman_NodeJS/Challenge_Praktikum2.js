const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hitungTotalBelanja() {
    console.log("Skenario :\n");

    rl.question("Masukkan jumlah barang: ", (jumlah) => {
        let jumlahBarang = parseInt(jumlah);
        console.log(`Masukkan jumlah barang: ${jumlahBarang}`);

        let totalHarga = 0;
        let daftarBarang = [];
        let counter = 0;

        function inputHargaBarang() {
            if (counter < jumlahBarang) {
                rl.question(`Masukkan harga barang ke-${counter + 1}: `, (harga) => {
                    let hargaBarang = parseFloat(harga);
                    console.log(`Masukkan harga barang ke-${counter + 1}: ${hargaBarang}`);

                    daftarBarang.push(hargaBarang);
                    totalHarga += hargaBarang;
                    counter++;
                    inputHargaBarang();
                });
            } else {
                let kategoriDiskon = "";
                if (totalHarga > 100000) {
                    kategoriDiskon = "Diskon Besar";
                } else if (totalHarga >= 50000) {
                    kategoriDiskon = "Diskon Sedang";
                } else {
                    kategoriDiskon = "Tidak Ada Diskon";
                }

                console.log("\nOutput yang diharapkan :\n");
                console.log(`Total harga: ${totalHarga}`);
                console.log(`Jumlah barang: ${jumlahBarang}`);
                console.log(`Kategori Diskon: ${kategoriDiskon}\n`);

                for (let i = 0; i < jumlahBarang; i++) {
                    console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
                }

                rl.close();
            }
        }

        inputHargaBarang();
    });
}

hitungTotalBelanja();