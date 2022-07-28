const express = require('express');
const loginRouter = require('./login');
const homeRouter = require('./home');

const routes = express.Router();


routes.use('/', loginRouter);
routes.use('/home', homeRouter);

module.exports = routes;