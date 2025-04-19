// DataMahasiswa_2311104004_marsella.js

async function readJSON() {
    try {
        const response = await fetch('tp7_1_2311104004.json');
        const data = await response.json();

        const namaLengkap = `${data.nama.depan} ${data.nama.belakang}`;
        const nim = data.nim;
        const fakultas = data.fakultas;

        console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
    } catch (error) {
        console.error("Gagal membaca file JSON:", error);
    }
}

readJSON();
