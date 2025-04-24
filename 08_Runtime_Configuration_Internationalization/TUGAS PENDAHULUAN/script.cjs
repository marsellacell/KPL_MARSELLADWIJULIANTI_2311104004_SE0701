const readline = require('readline');
const fs = require('fs');

const defaultConfig = {
  satuan_suhu: "celcius",
  batas_hari_deman: 14,
  pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
  pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
};

let config = { ...defaultConfig };

if (fs.existsSync("covid_config.json")) {
  const json = fs.readFileSync("covid_config.json");
  config = JSON.parse(json);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhu) => {
  rl.question("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ", (hari) => {
    suhu = parseFloat(suhu);
    hari = parseInt(hari);

    let validSuhu = false;
    if (config.satuan_suhu === "celcius") {
      validSuhu = suhu >= 36.5 && suhu <= 37.5;
    } else {
      validSuhu = suhu >= 97.7 && suhu <= 99.5;
    }

    if (validSuhu && hari < config.batas_hari_deman) {
      console.log(config.pesan_diterima);
    } else {
      console.log(config.pesan_ditolak);
    }

    rl.close();
  });
});
