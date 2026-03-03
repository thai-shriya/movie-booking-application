const express = require('express');
const router = express.Router();
const moviesController = require('./movies.controller');
const validate = require('../../shared/middlewares/validate');
const { createMovieSchema, updateMovieSchema } = require('./movies.validator');

//GET request to fetch all movies
router.get('/mba/api/v1/movies', moviesController.getAllMovies);

//POST request to add a movie
router.post('/mba/api/v1/movies', validate(createMovieSchema), moviesController.addMovie);

//PATCH request to update movie details
router.patch('/mba/api/v1/movies/:id', validate(updateMovieSchema), moviesController.updateMovie);

//DELETE request to delete a movie
router.delete('/mba/api/v1/movies/:id', moviesController.deleteMovie);

module.exports = router;
