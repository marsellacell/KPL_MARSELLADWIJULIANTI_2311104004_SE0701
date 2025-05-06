import { checkEmailIsValid } from "../utils/checkEmailIsValid.js";
import {prisma} from "./../config/database.js"

export async function createMahasiswa(req, res) {
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

        if(!checkEmailIsValid(email)) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Bad Request',
                error: 'Email is not valid'
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
}

export async function getAllMahasiswa(req, res) {
    try {
        const mahasiswa = await prisma.mahasiswa.findMany();

        if(mahasiswa.length == 0) {
            return res.status(200).json({
                statusCode: 200,
                message: 'Not found',
                error: 'Belum ada mahasiswa disini'
            })
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Mahasiswa retrive successfully',
            data: {
                mahasiswa: mahasiswa
            }
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export async function getMahasiswaByNIM(req, res) {
    try {
        const {nim} = req.params

        const mahasiswa = await prisma.mahasiswa.findUnique({
            where: {
                nim: nim
            }
        });

        if(!mahasiswa) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Mahasiswa Not found',
                error: 'Nim tidak valid'
            })
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Mahasiswa retrive successfully',
            data: {
                mahasiswa: mahasiswa
            }
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export async function updateMahasiswaById(req, res) {
    try {
        const {id} = req.params
        // kaya gini
        const data = req.body;

        const mahasiswa = await prisma.mahasiswa.update({
            where: {
                id: parseInt(id)
            },
            data: data
        })

        if(!mahasiswa) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Mahasiswa Not found',
                error: 'Nim tidak valid'
            })
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Mahasiswa updated successfully',
            data: {
                mahasiswa: mahasiswa
            }
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}


export async function deleteMahasiswaById(req, res) {
    try {
        const {id} = req.params

        const mahasiswa = await prisma.mahasiswa.delete({
            where: {
                id: parseInt(id)
            }
        })

        if(!mahasiswa) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Mahasiswa Not found',
                error: 'Nim tidak valid'
            })
        }

        res.status(200).json({
            statusCode: 200,
            message: 'Mahasiswa deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}