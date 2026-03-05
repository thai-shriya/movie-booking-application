const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');
const validate = require('../../shared/middlewares/validate');
const { createUserSchema, updateUserSchema } = require('./users.validator');

//GET request to fetch all users
router.get('/mba/api/v1/users', usersController.getAllUsers);

//POST request to add a user
router.post('/mba/api/v1/users', validate(createUserSchema), usersController.addUser);

//PATCH request to update user details
router.patch('/mba/api/v1/users/:id', validate(updateUserSchema), usersController.updateUser);

//DELETE request to delete a user
router.delete('/mba/api/v1/users/:id', usersController.deleteUser);

module.exports = router;
