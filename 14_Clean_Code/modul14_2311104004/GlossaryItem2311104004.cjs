const fs = require('fs');

/**
 * Class untuk membaca dan menampilkan glossary dari file JSON.
 */
class GlossaryItem2311104004 {
  /**
   * Membaca file glossary JSON dan menampilkan GlossEntry.
   */
  static readJson() {
    fs.readFile('jurnal7_3_2311104004.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Gagal membaca file JSON:', err);
        return;
      }

      const glossaryData = JSON.parse(data);
      const entry = glossaryData.glossary.GlossDiv.GlossList.GlossEntry;

      console.log('\n=== Glossary Entry ===');
      console.log(`ID           : ${entry.ID}`);
      console.log(`SortAs       : ${entry.SortAs}`);
      console.log(`GlossTerm    : ${entry.GlossTerm}`);
      console.log(`Acronym      : ${entry.Acronym}`);
      console.log(`Abbrev       : ${entry.Abbrev}`);
      console.log(`GlossDef     : ${entry.GlossDef.para}`);
      console.log(`GlossSeeAlso : ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
      console.log(`GlossSee     : ${entry.GlossSee}`);
    });
  }
}

// Jalankan fungsi
GlossaryItem2311104004.readJson();
