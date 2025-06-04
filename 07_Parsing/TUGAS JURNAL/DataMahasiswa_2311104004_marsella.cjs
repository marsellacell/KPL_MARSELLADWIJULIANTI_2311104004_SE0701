const fs = require('fs');

class DataMahasiswa_2311104004 {
  static readJSON() {
    fs.readFile('jurnal7_1_2311104004.json', 'utf-8', (err, data) => {
      if (err) {
        console.error('Gagal baca file JSON:', err);
        return;
      }

      const mahasiswa = JSON.parse(data);

      console.log('\n=== Data Mahasiswa ===');
      console.log(`Nama     : ${mahasiswa.firstName} ${mahasiswa.lastName}`);
      console.log(`Gender   : ${mahasiswa.gender}`);
      console.log(`Umur     : ${mahasiswa.age}`);
      console.log(`Alamat   : ${mahasiswa.address.streetAddress}, ${mahasiswa.address.city}, ${mahasiswa.address.state}`);

      console.log('\nMata Kuliah:');
      mahasiswa.courses.forEach((course, index) => {
        console.log(` ${index + 1}. [${course.code}] ${course.name}`);
      });
    });
  }
}

DataMahasiswa_2311104004.readJSON();
