import fs from 'fs';

class GlossaryItem2311104004 {
  // Method untuk membaca dan parsing file JSON
  ReadJSON() {
    // Membaca file JSON
    fs.readFile('jurnal7_3_2311104004.json', 'utf-8', (err, data) => {
      if (err) {
        console.error('Gagal membaca file:', err);
        return;
      }

      // Parsing data JSON
      const glossaryData = JSON.parse(data);

      // Menampilkan bagian GlossEntry
      console.log('GlossEntry:');
      glossaryData.Glossary.GlossEntry.forEach((entry) => {
        console.log(`ID: ${entry.ID}, Title: ${entry.Title}, Abbrev: ${entry.Abbrev}`);
      });
    });
  }
}

// Inisialisasi objek dan panggil ReadJSON()
const glossary = new GlossaryItem2311104004();
glossary.ReadJSON();
