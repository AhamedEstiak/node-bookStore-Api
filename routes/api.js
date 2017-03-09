var express = require('express');
var router = express.Router();
var genresController = require('./../api/controllers/genresController');
var booksController = require('./../api/controllers/booksController');

/* GET Api page. */
router.get('/', function(req, res, next) {
  res.send('api');
});

// Get genres
router.get('/genres', genresController.getGenre);

// Add genres
router.post('/genres', genresController.postGenre);

// Update genres
router.put('/genres/:id', genresController.updateGenre);

// Delete genres
router.delete('/genres/:id', genresController.removeGenre);

// Get Books
router.get('/books', function(req, res) {
    Book.find({}, function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// Add Books
router.post('/books', function(req, res) {
    var books = {
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages,
        image_url: req.body.image_url,
        buy_url: req.body.buy_url
    };
    var book = new Book(books);
    book.save(function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// Get Book by id
router.get('/books/:id', function(req, res) {
    Book.findById(req.params.id, function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// Update Book
router.put('/books/:id', function(req, res) {
    var id = req.params.id;
    var books = {
        $set: {
            title: req.body.title,
            genre: req.body.genre,
            description: req.body.description,
            author: req.body.author,
            publisher: req.body.publisher,
            pages: req.body.pages,
            image_url: req.body.image_url,
            buy_url: req.body.buy_url
        }
    };
    Book.findByIdAndUpdate(id, books, {new: true}, function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

// Delete Book
router.delete('/books/:id', function(req, res) {
    var id = req.params.id;
    Book.remove({_id: id}, function (err, data) {
        if (err) {
            throw err;
        }
        res.json(data);
    });
});

module.exports = router;
