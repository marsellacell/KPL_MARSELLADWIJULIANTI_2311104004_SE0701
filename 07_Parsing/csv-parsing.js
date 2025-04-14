// Import modul file system dan csv-parser
import fs from 'fs';
import csv from 'csv-parser';

// Membaca file CSV dari file bernama 'data.csv'
// Hasilnya diproses baris per baris dan ditampilkan ke konsol
fs.createReadStream('data.csv')
  .pipe(csv()) // parsing isi CSV
  .on('data', (row) => {
    // Setiap baris diolah sebagai objek JavaScript
    console.log(row);
  })
  .on('end', () => {
    // Setelah semua data selesai dibaca
    console.log('CSV parsing complete.');
  });