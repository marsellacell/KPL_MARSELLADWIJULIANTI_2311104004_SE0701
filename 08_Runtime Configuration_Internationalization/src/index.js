import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import { config } from '../config/config.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Mendapatkan __dirname dalam ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inisialisasi i18next
await i18next
  .use(Backend)
  .init({
    lng: config.defaultLang,
    fallbackLng: 'en',
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/translation.json')
    }
  });

// Output
console.log('Environment:', config.env);
console.log('Port:', config.port);
console.log(i18next.t('intro'));
console.log(i18next.t('greeting', { name: 'Revan' }));