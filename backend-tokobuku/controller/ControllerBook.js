'use strict'

// init simodel book
const { Book } = require('../model/Book');

// class
class BookController {
    static findAllBooks(req, res) {
        Book.showAllBooks((err, data) =>{
            if (err) {
                console.log('controller error');
            } else {
                res.json(data);
            }
        });
    }
    static findBookById(req,res) {
        const { id } = req.params;
        Book.showBookById(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    tittle: 'Api Backend Toko Buku',
                    massage: 'Koleksi Buku',
                    status: '200',
                    data
                });
            }
        });
    }
}



// module export
module.exports = {
    BookController
};