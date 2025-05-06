// app.js
import express from 'express';
import { config } from 'dotenv';
import {
  createMahasiswa,
  deleteMahasiswaById,
  getAllMahasiswa,
  getMahasiswaByNIM,
  updateMahasiswaById
} from './controllers/mahasiswaController.js';

config(); // load environment variables from .env

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World! guysss kelas 01');
});
app.post('/mahasiswa', createMahasiswa);
app.get('/mahasiswa', getAllMahasiswa);
app.get('/mahasiswa/:nim', getMahasiswaByNIM);
app.put('/mahasiswa/:id', updateMahasiswaById);
app.delete('/mahasiswa/:id', deleteMahasiswaById);

export default app;