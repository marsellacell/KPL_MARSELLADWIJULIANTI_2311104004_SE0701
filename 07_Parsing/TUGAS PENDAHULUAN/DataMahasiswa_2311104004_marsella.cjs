const fs = require('fs');

function readJSON() {
    try {
        const data = fs.readFileSync('tp7_1_2311104004.json', 'utf-8');
        const jsonData = JSON.parse(data);

        const namaLengkap = `${jsonData.nama.depan} ${jsonData.nama.belakang}`;
        const nim = jsonData.nim;
        const fakultas = jsonData.fakultas;

        console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
    } catch (err) {
        console.error("Gagal membaca file JSON:", err);
    }
}

readJSON();
