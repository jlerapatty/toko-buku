'use strict'

// init express 
const express = require('express');
const router = express.Router();

// init controller
const { Controller } = require('../controller/Controller')

// init another router
const { BookRouter } = require('./BookRouter');

// endpoint homepage
router.get('/', Controller.Homepage);

// endpoint book
router.use('/books', BookRouter);

// module exports
module.exports = {
    router
}