const express = require('express');
const router = express.Router();
const theatersController = require('./theaters.controller');
const { validate } = require('../../shared/middlewares/validate');
const { createTheaterSchema, updateTheaterSchema } = require('./theaters.validator');
const { verifyToken } = require('../../shared/middlewares/verifyToken');
const { isAuthenticated } = require('../../shared/middlewares/isAuthenticated');

// All users (even unauthenticated) can view theaters
router.get('/mba/api/v1/theaters', theatersController.getAllTheaters);

// Admin / Customer role protected routes
router.post('/mba/api/v1/theaters', validate(createTheaterSchema), verifyToken, isAuthenticated, theatersController.addTheater);
router.patch('/mba/api/v1/theaters/:id', validate(updateTheaterSchema), verifyToken, isAuthenticated, theatersController.updateTheater);
router.delete('/mba/api/v1/theaters/:id', verifyToken, isAuthenticated, theatersController.deleteTheater);

module.exports = router;
