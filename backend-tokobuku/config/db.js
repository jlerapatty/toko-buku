'use strict'

// init mysql dan db.config
const mysql = require('mysql');
const DBconfig = require('./db.config');
const connectDB = mysql.createConnection({
  host: DBconfig.HOST,
  user: DBconfig.USER,
  password: DBconfig.PASSWORD,
  database: DBconfig.DB
});

connectDB.connect(err => {
    if (err) throw err;
    console.log('database connected')
});

// module export
module.exports = connectDB;
