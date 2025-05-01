import express from 'express';
import { config } from 'dotenv';
import { prisma } from './config/database.js';

const app = express();
config(); // load environment variables from .env file

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// welcome route
app.get('/', (req, res) => {
    res.send('Hello World! guysss kelas 01');
})

// create a mahasiswa route
app.post('/mahasiswa', async (req, res) => {
    try {
        const { nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin } = req.body;

        // validate request body
        if (!nim || !nama_lengkap || !email || !no_hp || !tanggal_lahir || !jenis_kelamin) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Bad Request',
                error: 'All fields are required'
            })
        }

        const mahasiswaIsAleradyExists = await prisma.mahasiswa.findUnique({
            where: {
                nim: nim
            }
        })

        if(mahasiswaIsAleradyExists) {
            return res.status(409).json({
                statusCode: 409,
                message: 'Conflict',
                error: 'Mahasiswa already exists'
            })
        }

        const mahasiswa = await prisma.mahasiswa.create({
            data: {
                nim: nim,
                nama_lengkap: nama_lengkap,
                email: email,
                no_hp: no_hp,
                tanggal_lahir: new Date(tanggal_lahir),
                jenis_kelamin: jenis_kelamin
            }
        })

        await prisma.$disconnect();

        res.status(201).json({
            statusCode: 201,
            message: 'Mahasiswa created successfully',
            data: {
                id: mahasiswa.id,
                nim: nim,
                nama_lengkap: nama_lengkap,
                email: email,
                no_hp: no_hp,
                tanggal_lahir: tanggal_lahir,
                jenis_kelamin: jenis_kelamin,
                createdAt: mahasiswa.createdAt,
                updatedAt: mahasiswa.updatedAt
            }
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.message
        })
    }
})

// get all mahasiswa route

// get a mahasiswa by id route

// update a mahasiswa by id route

// delete a mahasiswa by id route


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})