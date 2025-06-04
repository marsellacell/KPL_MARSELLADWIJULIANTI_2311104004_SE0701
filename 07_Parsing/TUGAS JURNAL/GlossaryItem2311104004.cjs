const fs = require('fs');

class GlossaryItem2311104004 {
    static ReadJSON() {
        // Membaca file JSON
        fs.readFile('jurnal7_3_2311104004.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading the file:', err);
                return;
            }

            // Parse data JSON
            const glossaryData = JSON.parse(data);

            // Akses dan tampilkan bagian GlossEntry
            const glossEntry = glossaryData.glossary.GlossDiv.GlossList.GlossEntry;
            
            console.log("GlossEntry:");
            console.log(`ID: ${glossEntry.ID}`);
            console.log(`SortAs: ${glossEntry.SortAs}`);
            console.log(`GlossTerm: ${glossEntry.GlossTerm}`);
            console.log(`Acronym: ${glossEntry.Acronym}`);
            console.log(`Abbrev: ${glossEntry.Abbrev}`);
            console.log(`GlossDef Para: ${glossEntry.GlossDef.para}`);
            console.log(`GlossSeeAlso: ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
            console.log(`GlossSee: ${glossEntry.GlossSee}`);
        });
    }
}

// Panggil method untuk membaca dan menampilkan JSON
GlossaryItem2311104004.ReadJSON();
