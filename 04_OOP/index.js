class KodePos {
    constructor() {
        this.dataKodePos = {
            "Batununggal": 40266,
            "Kujangsari": 40287,
            "Mengger": 40267,
            "Wates": 40256,
            "Cijaura": 40287,
            "Jatisari": 40286,
            "Margasari": 40286,
            "Sekejati": 40286,
            "Kebonwaru": 40272,
            "Maleer": 40274,
            "Samoja": 40273
        };
    }

    getKodePos(kelurahan) {
        return this.dataKodePos[kelurahan] || "Kode pos tidak ditemukan";
    }
}

class DoorMachine {
    constructor() {
        this.state = "Terkunci"; // State awal
    }

    kunci() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    buka() {
        this.state = "Terbuka";
        console.log("Pintu tidak terkunci");
    }
}

// Jalankan KodePos
const kodePos = new KodePos();
console.log("Kode Pos Batununggal:", kodePos.getKodePos("Batununggal"));
console.log("Kode Pos Wates:", kodePos.getKodePos("Wates"));
console.log("Kode Pos XYZ:", kodePos.getKodePos("XYZ"));  // Uji input tidak valid

console.log("\n=== Simulasi DoorMachine ===");
const pintu = new DoorMachine();
pintu.buka();  // Output: "Pintu tidak terkunci"
pintu.kunci(); // Output: "Pintu terkunci"