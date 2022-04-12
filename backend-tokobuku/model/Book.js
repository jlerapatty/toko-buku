'use strict'

// init 
const sql = require('../config/db');

// class book
class Book {
    // constructor
    constructor(id,nomor_produk,judul,halaman,genre,tahun,penerbit,pengarang,ISBN,harga,stok,created,updated) {
        this.id = id;
        this.nomor_produk = nomor_produk;
        this.judul = judul;
        this.halaman = halaman;
        this.genre = genre;
        this.tahun = tahun;
        this.penerbit = penerbit;
        this.pengarang = pengarang;
        this.ISBN = ISBN;
        this.harga = harga;
        this.stok = stok;
        this.created = created;
        this.updated = updated;
    }
    // method
    // cari semua book
    static showAllBooks(result) {
        let sqlQuery = `SELECT * FROM buku`;
        sql.query(sqlQuery, (err,res) => {
            if (err) {
                console.log('error =>',err);
                result(err, null)
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(eachData => {
                    book = new Book(
                        eachData.id,
                        eachData.nomor_produk, 
                        eachData.judul, 
                        eachData.halaman,
                        eachData.genre,
                        eachData.tahun,
                        eachData.penerbit,
                        eachData.pengarang,
                        eachData.ISBN,
                        eachData.harga,
                        eachData.stok,
                        eachData.created,
                        eachData.updated
                    );

                    books.push(book);
                });
                console.log('result', res);
                result(null, books)
            }
        });
    }
    static showBookById(id,result) {
        let sqlQuery = `SELECT * FROM buku WHERE id = ${id}`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('error =>, err');
                result(err,null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach(eachData => {
                    book = new Book(
                        eachData.id,
                        eachData.nomor_produk, 
                        eachData.judul, 
                        eachData.halaman,
                        eachData.genre,
                        eachData.tahun,
                        eachData.penerbit,
                        eachData.pengarang,
                        eachData.ISBN,
                        eachData.harga,
                        eachData.stok,
                        eachData.created,
                        eachData.updated
                    );

                    books.push(book);
                });
                console.log('result', res);
                result(null, books)
            }
        })
    }
}

// module exports
module.exports = {
    Book
}