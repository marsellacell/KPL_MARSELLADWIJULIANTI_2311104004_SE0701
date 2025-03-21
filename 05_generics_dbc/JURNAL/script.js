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

class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    printAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
        });
    }
}

const database = new SimpleDataBase();
database.addNewData(23.0); // Menggunakan tipe data double
database.addNewData(11.0);
database.addNewData(4.0);
database.printAllData();