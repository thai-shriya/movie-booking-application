const express = require('express');
const router = express.Router();
const moviesController = require('./movies.controller');
const { validate } = require('../../shared/middlewares/validate');
const { createMovieSchema, updateMovieSchema } = require('./movies.validator');
const { verifyToken } = require('../../shared/middlewares/verifyToken');
const { isAuthenticated } = require('../../shared/middlewares/isAuthenticated');

//GET request to fetch all movies
router.get('/mba/api/v1/movies', moviesController.getAllMovies);

//POST request to add a movie
router.post('/mba/api/v1/movies', validate(createMovieSchema), verifyToken, isAuthenticated, moviesController.addMovie);

//PATCH request to update movie details
router.patch('/mba/api/v1/movies/:id', validate(updateMovieSchema), verifyToken, isAuthenticated, moviesController.updateMovie);

//DELETE request to delete a movie
router.delete('/mba/api/v1/movies/:id', verifyToken, isAuthenticated, moviesController.deleteMovie);

module.exports = router;
