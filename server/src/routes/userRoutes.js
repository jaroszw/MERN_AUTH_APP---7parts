const express = require('express');
const userController = require('../controllers/userControler');
const { isAuthenticated } = require('../middlewares');

const user = express.Router();

user.post('/signup', userController.signup);
user.post('/login', userController.login);
user.get('/dash', isAuthenticated, userController.findByID);

module.exports = user;
