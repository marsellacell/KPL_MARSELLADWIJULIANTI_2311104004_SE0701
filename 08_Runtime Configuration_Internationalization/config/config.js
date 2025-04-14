import 'dotenv/config'; // load env vars

export const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    defaultLang: process.env.DEFAULT_LANG || 'en'
  };
  