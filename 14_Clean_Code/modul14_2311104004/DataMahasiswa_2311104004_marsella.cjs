const fs = require('fs');

/**
 * Class untuk membaca dan menampilkan data mahasiswa dari file JSON.
 */
class DataMahasiswa2311104004 {
  /**
   * Membaca file JSON mahasiswa dan menampilkannya ke console.
   */
  static readJson() {
    fs.readFile('jurnal7_1_2311104004.json', 'utf-8', (err, data) => {
      if (err) {
        console.error('Gagal membaca file JSON:', err);
        return;
      }

      const student = JSON.parse(data);

      console.log('\n=== Data Mahasiswa ===');
      console.log(`Nama     : ${student.firstName} ${student.lastName}`);
      console.log(`Gender   : ${student.gender}`);
      console.log(`Umur     : ${student.age}`);
      console.log(`Alamat   : ${student.address.streetAddress}, ${student.address.city}, ${student.address.state}`);

      console.log('\nMata Kuliah:');
      student.courses.forEach((course, index) => {
        console.log(` ${index + 1}. [${course.code}] ${course.name}`);
      });
    });
  }
}

// Jalankan fungsi
DataMahasiswa2311104004.readJson();
