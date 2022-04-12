'use strict'

// init express 
const express = require('express');
const BookRouter = express.Router();

// init controller
const { BookController } = require('../controller/ControllerBook')


// endpoint
BookRouter.get('/', BookController.findAllBooks);

// endpoint by id
BookRouter.get('/:id', BookController.findBookById);

// Routing book by id

// module exports
module.exports = {
    BookRouter
}