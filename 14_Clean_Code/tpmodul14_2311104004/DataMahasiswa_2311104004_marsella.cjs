const fs = require('fs');

/**
 * Membaca file JSON dan menampilkan informasi mahasiswa.
 */
function readJsonFile() {
  try {
    // Membaca isi file JSON sebagai string
    const fileContent = fs.readFileSync('tp7_1_2311104004.json', 'utf-8');

    // Mengubah string JSON menjadi objek JavaScript
    const studentData = JSON.parse(fileContent);

    // Mengambil data mahasiswa dari objek
    const fullName = `${studentData.nama.depan} ${studentData.nama.belakang}`;
    const studentId = studentData.nim;
    const faculty = studentData.fakultas;

    // Menampilkan informasi mahasiswa ke console
    console.log(`Nama ${fullName} dengan NIM ${studentId} dari fakultas ${faculty}`);
  } catch (error) {
    console.error('Gagal membaca file JSON:', error.message);
  }
}

// Menjalankan fungsi utama
readJsonFile();
