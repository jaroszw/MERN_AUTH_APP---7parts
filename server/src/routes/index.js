const express = require('express');
const user = require('./userRoutes');

const api = express.Router();

// api/v1/user
api.use('/user', user);

module.exports = api;
