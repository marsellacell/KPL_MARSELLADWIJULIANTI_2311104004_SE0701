const readline = require("readline");

class KodeBuah {
    constructor() {
        this.buahDict = {
            "Apel": "001", "Aprikot": "002", "Alpukat": "003", "Pisang": "004",
            "Paprika": "005", "Kurma": "006", "Durian": "007", "Anggur": "008",
            "Melon": "009", "Semangka": "000", "Mangga": "010", "Stroberi": "011",
            "Nanas": "012", "Jeruk": "013", "Blueberry": "014"
        };
    }

    cariKodeBuah(rl, callback) {
        console.log("\n=== Sistem Pencarian Kode Buah ===");
        console.log("Daftar buah yang tersedia: ", Object.keys(this.buahDict).join(", "));

        const tanyaBuah = () => {
            rl.question("\nMasukkan nama buah (atau ketik 'exit' untuk lanjut ke game): ", (input) => {
                if (input.toLowerCase() === "exit") {
                    console.log("Pencarian kode buah selesai! Sekarang lanjut ke game.");
                    callback();
                    return;
                }

                const kode = this.buahDict[input] || "Kode tidak ditemukan";
                console.log(`Kode Buah: ${kode}`);
                tanyaBuah();
            });
        };

        tanyaBuah();
    }
}

class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
        this.states = ["Berdiri", "Jongkok", "Tengkurap", "Terbang"];
        this.NIM = 2311104004;
    }

    ubahState(stateBaru) {
        if (!this.states.includes(stateBaru)) {
            console.log("State tidak valid! Pilih: Berdiri, Jongkok, Tengkurap, Terbang");
            return;
        }

        if (this.state === stateBaru) {
            console.log(`Karakter sudah dalam posisi ${stateBaru}`);
        } else {
            console.log(`Transisi dari ${this.state} ke ${stateBaru}`);
            this.state = stateBaru;

            if (this.NIM % 3 === 1) {
                if (stateBaru === "Berdiri") {
                    console.log("Posisi standby");
                } else if (stateBaru === "Tengkurap") {
                    console.log("Posisi istirahat");
                }
            }
        }
    }

    start(rl) {
        console.log("\n=== Simulasi PosisiKarakterGame ===");
        console.log(`State awal: ${this.state}`);
        console.log(`State yang tersedia: ${this.states.join(", ")}`);

        const tanyaState = () => {
            rl.question("\nMasukkan state baru (atau ketik 'exit' untuk keluar): ", (input) => {
                if (input.toLowerCase() === "exit") {
                    console.log("Game selesai. Terima kasih!");
                    rl.close();
                    return;
                }
                this.ubahState(input);
                tanyaState();
            });
        };

        tanyaState();
    }
}

// Jalankan program
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// **Langkah 1: Pencarian Kode Buah**
const kodeBuah = new KodeBuah();
kodeBuah.cariKodeBuah(rl, () => {
    // **Langkah 2: Simulasi Game Karakter**
    const game = new PosisiKarakterGame();
    game.start(rl);
});