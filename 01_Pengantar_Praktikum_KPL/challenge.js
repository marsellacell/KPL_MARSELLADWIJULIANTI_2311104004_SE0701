import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama kamu? ", (nama) => {
    input.question("Jurusan kamu? ", (jurusan) => {
        input.question("Universitas kamu? ", (universitas) => {
            input.question("Umur kamu? ", (umur) => {
                console.info(`Hallo ${nama}, jurusan kamu adalah ${jurusan}, kamu kuliah di ${universitas}, dan umur kamu ${umur} tahun.`);
                input.close();
            });
        });
    });
});