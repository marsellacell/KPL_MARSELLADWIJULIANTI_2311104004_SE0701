// Import library yang diperlukan
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const PORT = 3000;

// Middleware
app.use(express.json()); // supaya bisa baca JSON body

// Data Movie default (Top 3 IMDB)
let movies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption."
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        stars: ["Marlon Brando", "Al Pacino", "James Caan"],
        description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        description: "Batman faces the Joker, a criminal mastermind who wants to see Gotham descend into anarchy."
    }
];

/**
 * @swagger
 * /api/Movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: A list of movies
 */
app.get('/api/Movies', (req, res) => {
    res.json(movies);
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the movie
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A movie object
 *       404:
 *         description: Movie not found
 */
app.get('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < movies.length) {
        res.json(movies[id]);
    } else {
        res.status(404).send('Movie not found');
    }
});

/**
 * @swagger
 * /api/Movies:
 *   post:
 *     summary: Add a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - director
 *               - stars
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               director:
 *                 type: string
 *               stars:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Movie added successfully
 */
app.post('/api/Movies', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.status(201).send('Movie added successfully');
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   delete:
 *     summary: Delete a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the movie to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
app.delete('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < movies.length) {
        movies.splice(id, 1);
        res.send('Movie deleted successfully');
    } else {
        res.status(404).send('Movie not found');
    }
});

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Movies API',
            version: '1.0.0',
            description: 'API for managing movies',
        },
    },
    apis: ['./server.js'], // ambil dokumentasi dari file ini
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});