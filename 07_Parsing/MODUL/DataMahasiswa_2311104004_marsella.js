const fs = require('fs');

class DataMahasiswa {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readJSON() {
        fs.readFile(this.filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            const mahasiswa = JSON.parse(data);
            console.log('Data Mahasiswa:');
            console.log(`NIM: ${mahasiswa.NIM}`);
            console.log(`Nama: ${mahasiswa.FirstName} ${mahasiswa.LastName}`);
            console.log(`Umur: ${mahasiswa.Age}`);
            console.log(`Jenis Kelamin: ${mahasiswa.Gender}`);
            console.log(`Jurusan: ${mahasiswa.Major}`);
        });
    }
}

// Ganti 'path_to_your_json_file' dengan path yang benar ke file JSON Anda
const dataMahasiswa = new DataMahasiswa('jurnal7_1_2311104004.json');
dataMahasiswa.readJSON();
