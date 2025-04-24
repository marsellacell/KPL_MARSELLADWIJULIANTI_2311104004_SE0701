class CovidConfig {
    constructor() {
      this.defaultConfig = {
        satuan_suhu: "celcius",
        batas_hari_deman: 14,
        pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
        pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
      };
      this.config = { ...this.defaultConfig };
    }
  
    async loadConfig() {
      try {
        const response = await fetch('covid_config.json');
        const json = await response.json();
        this.config = { ...this.config, ...json };
      } catch (error) {
        console.warn("Config file tidak ditemukan. Menggunakan default.");
      }
      this.updateLabel();
    }
  
    updateLabel() {
      document.getElementById('suhu-label').innerText =
        `Berapa suhu badan anda saat ini? Dalam nilai ${this.config.satuan_suhu}`;
    }
  
    ubahSatuan() {
      this.config.satuan_suhu = this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
      this.updateLabel();
    }
  
    cek(suhu, hari) {
      let suhuValid = false;
  
      if (this.config.satuan_suhu === "celcius") {
        suhuValid = suhu >= 36.5 && suhu <= 37.5;
      } else {
        suhuValid = suhu >= 97.7 && suhu <= 99.5;
      }
  
      if (suhuValid && hari < this.config.batas_hari_deman) {
        return this.config.pesan_diterima;
      } else {
        return this.config.pesan_ditolak;
      }
    }
  }
  
  const config = new CovidConfig();
  config.loadConfig();
  
  function cek() {
    const suhu = parseFloat(document.getElementById('suhu').value);
    const hari = parseInt(document.getElementById('hari').value);
    const hasil = config.cek(suhu, hari);
    document.getElementById('hasil').innerText = hasil;
  }
  
  function ubahSatuan() {
    config.ubahSatuan();
  }
  