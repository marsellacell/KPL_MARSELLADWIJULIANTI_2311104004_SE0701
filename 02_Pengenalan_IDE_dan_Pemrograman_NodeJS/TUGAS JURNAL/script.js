const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// **A. Menerima Input Nama Praktikan**
rl.question("Masukkan nama Anda: ", function (nama) {
    console.log(`Selamat datang, ${nama}!\n`);

    // **B. Array dengan 50 Elemen**
    let array = new Array(50).fill(0).map((_, i) => i);
    for (let i = 0; i < array.length; i++) {
        let output = `${i}`;
        if (i % 2 === 0 && i % 3 === 0) {
            output += " #$#$";
        } else if (i % 2 === 0) {
            output += " ##";
        } else if (i % 3 === 0) {
            output += " $$";
        }
        console.log(output);
    }

    // **C. Mengecek Bilangan Prima**
    rl.question("\nMasukkan angka (1-10000): ", function (nilaiString) {
        let nilaiInt = parseInt(nilaiString);
        if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
            console.log("Input tidak valid! Masukkan angka antara 1 - 10000.");
        } else {
            if (isPrima(nilaiInt)) {
                console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
            }
        }
        rl.close();
    });
});

// **Fungsi Cek Bilangan Prima**
function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
