const express = require('express');
const router = express.Router();
const showsController = require('./shows.controller');
const { validate } = require('../../shared/middlewares/validate');
const { createShowSchema, updateShowSchema } = require('./shows.validator');
const { verifyToken } = require('../../shared/middlewares/verifyToken');
const { isAuthenticated } = require('../../shared/middlewares/isAuthenticated');

// All users can view shows
router.get('/mba/api/v1/shows', showsController.getAllShows);

// Admin / Customer role protected routes
router.post('/mba/api/v1/shows', validate(createShowSchema), verifyToken, isAuthenticated, showsController.addShow);
router.patch('/mba/api/v1/shows/:id', validate(updateShowSchema), verifyToken, isAuthenticated, showsController.updateShow);
router.delete('/mba/api/v1/shows/:id', verifyToken, isAuthenticated, showsController.deleteShow);

module.exports = router;
