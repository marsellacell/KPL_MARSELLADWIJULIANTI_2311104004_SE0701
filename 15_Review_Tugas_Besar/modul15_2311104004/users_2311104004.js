// === Modul15_2311104004.js ===
// Aplikasi registrasi & login sederhana dengan secure coding (validasi & hashing password)

const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DATA_FILE = 'users_2311104004.json';

/**
 * Fungsi untuk melakukan hash password menggunakan SHA256.
 */
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

/**
 * Validasi input username dan password
 */
function isValidInput(username, password) {
  const asciiRegex = /^[a-zA-Z0-9_]+$/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (!asciiRegex.test(username)) {
    console.log('❌ Username hanya boleh mengandung huruf, angka, dan underscore.');
    return false;
  }
  if (username.length < 4 || username.length > 16) {
    console.log('❌ Username harus 4-16 karakter.');
    return false;
  }
  if (password.length < 8 || password.length > 20) {
    console.log('❌ Password harus 8-20 karakter.');
    return false;
  }
  if (!specialCharRegex.test(password)) {
    console.log('❌ Password harus mengandung minimal 1 karakter spesial (!@#$%^&*).');
    return false;
  }
  if (password.toLowerCase().includes(username.toLowerCase())) {
    console.log('❌ Password tidak boleh mengandung username.');
    return false;
  }
  return true;
}

/**
 * Fungsi untuk menyimpan data user ke dalam file JSON
 */
function saveUser(username, hashedPassword) {
  const users = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE)) : [];
  users.push({ username, password: hashedPassword });
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

/**
 * Fungsi untuk login user dari file JSON
 */
function loginUser(username, password) {
  if (!fs.existsSync(DATA_FILE)) {
    console.log('❌ Belum ada user terdaftar.');
    return;
  }

  const users = JSON.parse(fs.readFileSync(DATA_FILE));
  const user = users.find(u => u.username === username);

  if (!user) {
    console.log('❌ Username tidak ditemukan.');
  } else if (user.password === hashPassword(password)) {
    console.log('✅ Login berhasil. Selamat datang, ' + username);
  } else {
    console.log('❌ Password salah.');
  }
}

// === MENU ===
function startApp() {
  console.log('\n=== Aplikasi Registrasi & Login ===');
  rl.question('Pilih (1: Register, 2: Login): ', (menu) => {
    if (menu === '1') {
      rl.question('Username: ', (username) => {
        rl.question('Password: ', (password) => {
          if (isValidInput(username, password)) {
            const hashed = hashPassword(password);
            saveUser(username, hashed);
            console.log('✅ Registrasi berhasil!');
          }
          rl.close();
        });
      });
    } else if (menu === '2') {
      rl.question('Username: ', (username) => {
        rl.question('Password: ', (password) => {
          loginUser(username, password);
          rl.close();
        });
      });
    } else {
      console.log('❌ Pilihan tidak valid.');
      rl.close();
    }
  });
}

startApp();
