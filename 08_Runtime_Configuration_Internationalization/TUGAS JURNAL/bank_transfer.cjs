const readline = require('readline');
const fs = require('fs');

// Default configuration
const defaultConfig = {
  lang: "en",
  transfer: {
    threshold: 25000000,
    low_fee: 6500,
    high_fee: 15000
  },
  methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
  confirmation: {
    en: "yes",
    id: "ya"
  }
};

let config = { ...defaultConfig };

if (fs.existsSync('bank_transfer_config.json')) {
  const fileData = fs.readFileSync('bank_transfer_config.json');
  config = JSON.parse(fileData);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lang = config.lang;
const text = {
  promptAmount: {
    en: "Please insert the amount of money to transfer:",
    id: "Masukkan jumlah uang yang akan di-transfer:"
  },
  fee: {
    en: "Transfer fee = ",
    id: "Biaya transfer = "
  },
  total: {
    en: "Total amount = ",
    id: "Total biaya = "
  },
  method: {
    en: "Select transfer method:",
    id: "Pilih metode transfer:"
  },
  confirmPrompt: {
    en: `Please type "${config.confirmation.en}" to confirm the transaction:`,
    id: `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi:`
  },
  success: {
    en: "The transfer is completed",
    id: "Proses transfer berhasil"
  },
  failed: {
    en: "Transfer is cancelled",
    id: "Transfer dibatalkan"
  }
};

// === FLOW ===
rl.question(`${text.promptAmount[lang]} `, (amountInput) => {
  const amount = parseInt(amountInput);
  const fee = amount <= config.transfer.threshold ? config.transfer.low_fee : config.transfer.high_fee;
  const total = amount + fee;

  console.log(`${text.fee[lang]}${fee}`);
  console.log(`${text.total[lang]}${total}`);

  console.log(`\n${text.method[lang]}`);
  config.methods.forEach((m, i) => {
    console.log(`${i + 1}. ${m}`);
  });

  rl.question(`\n${text.confirmPrompt[lang]} `, (confirmationInput) => {
    const valid = confirmationInput.toLowerCase() === config.confirmation[lang];
    console.log(valid ? text.success[lang] : text.failed[lang]);
    rl.close();
  });
});
