const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Task A: Menerima input satu huruf & menentukan vokal atau konsonan
rl.question("Masukkan satu huruf (A-Z): ", function (huruf) {
    huruf = huruf.toUpperCase();
    let vokal = ["A", "I", "U", "E", "O"];

    if (huruf.length === 1 && huruf >= "A" && huruf <= "Z") {
        if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
    } else {
        console.log("Input tidak valid! Harap masukkan satu huruf A-Z.");
    }

    // Task B: Array bilangan genap
    let angkaGenap = [2, 4, 6, 8, 10];
    angkaGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });

    rl.close();
});
