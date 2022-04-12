'use strict'

// dotenv
require('dotenv').config();

// init express 
const express = require('express');
const app = express();

// init module library
const bodyParser = require('body-parser');
const cors = require('cors');

// port
const port = process.env.PORT || 3000;

// cors
let originOptionCors = {
    origin: `http://localhost:${port}`
};

app.use(cors(originOptionCors));

// routing
const { router } = require('./router/router');

app.use('/', router);

// port listen
app.listen(port, () => `connected to port ${port}`);
