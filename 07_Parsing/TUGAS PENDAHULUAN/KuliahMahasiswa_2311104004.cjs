const fs = require('fs');

function readJSON() {
    try {
        const data = fs.readFileSync('tp7_2_2311104004.json', 'utf-8');
        const jsonData = JSON.parse(data);

        console.log("Daftar mata kuliah yang diambil:");
        jsonData.courses.forEach((mk, index) => {
            console.log(`MK ${index + 1} ${mk.code} - ${mk.name}`);
        });

    } catch (err) {
        console.error("Gagal membaca file JSON:", err);
    }
}

readJSON();
