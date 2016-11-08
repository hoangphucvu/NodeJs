/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-06 16:44:08
 * @Last Modified by:   hoangphucvu
 * @Last Modified time: 2016-11-08 07:57:31
 */
var express = require('express');
var routes = function(Book) {
    var bookRouter = express.Router();

    bookRouter.route('/Books')
        .post(function(req, res) {
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get(function(req, res) {

            var query = {};

            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, function(err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });
        });

    //declear middleware
    bookRouter.use('/:bookId', function(req, res, next) {
        Book.findById(req.params.bookId, function(err, book) {
            if (err)
                res.status(500).send(err);
            else if (book) {
                //add to request
                req.book = book;
                next();
            } else {
                res.status(404).send('no book exists');
            }
        });
    });

    bookRouter.route('/Books/:bookId')
        .get(function(req, res) {
            res.json(req.book);
        })
        .put(function(req, res) {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save();
            req.json(req.book);
        });
    return bookRouter;
};

module.exports = routes;