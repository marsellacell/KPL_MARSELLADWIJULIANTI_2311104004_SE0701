// Import libraries
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Data Mahasiswa (Static Array)
let mahasiswa = [
    {
        name: "Marsella Dwi Julianti",
        nim: "2311104004",
        course: ["KPL", "Database", "PBO"],
        year: 2022
    },
    {
        name: "Ahmad Fadli",
        nim: "2311104012",
        course: ["Jaringan", "AI", "KPL"],
        year: 2022
    },
    {
        name: "Nurul Hidayati",
        nim: "2311104021",
        course: ["Machine Learning", "Basis Data"],
        year: 2022
    }
];

/**
 * @swagger
 * /api/Mahasiswa:
 *   get:
 *     summary: Get all Mahasiswa
 *     responses:
 *       200:
 *         description: Successful retrieval of Mahasiswa list
 */
app.get('/api/Mahasiswa', (req, res) => {
    res.json(mahasiswa);
});

/**
 * @swagger
 * /api/Mahasiswa/{id}:
 *   get:
 *     summary: Get Mahasiswa by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID index of Mahasiswa
 *     responses:
 *       200:
 *         description: Successful retrieval of a Mahasiswa
 *       404:
 *         description: Mahasiswa not found
 */
app.get('/api/Mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < mahasiswa.length) {
        res.json(mahasiswa[id]);
    } else {
        res.status(404).send('Mahasiswa not found');
    }
});

/**
 * @swagger
 * /api/Mahasiswa:
 *   post:
 *     summary: Add a new Mahasiswa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               nim:
 *                 type: string
 *               course:
 *                 type: array
 *                 items:
 *                   type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Mahasiswa created successfully
 */
app.post('/api/Mahasiswa', (req, res) => {
    const newMahasiswa = req.body;
    mahasiswa.push(newMahasiswa);
    res.status(201).send('Mahasiswa created successfully');
});

/**
 * @swagger
 * /api/Mahasiswa/{id}:
 *   delete:
 *     summary: Delete Mahasiswa by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID index of Mahasiswa to delete
 *     responses:
 *       200:
 *         description: Mahasiswa deleted successfully
 *       404:
 *         description: Mahasiswa not found
 */
app.delete('/api/Mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < mahasiswa.length) {
        mahasiswa.splice(id, 1);
        res.send('Mahasiswa deleted successfully');
    } else {
        res.status(404).send('Mahasiswa not found');
    }
});

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Mahasiswa API',
            version: '1.0.0',
            description: 'API for managing Mahasiswa data',
        },
    },
    apis: ['./server.js'], // path ke file ini
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
