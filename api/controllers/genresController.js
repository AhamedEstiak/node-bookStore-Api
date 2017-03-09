var Genre = require('./../models/genre');

module.exports = {
    // Get genres
    getGenre: function(req, res) {
        Genre.find({}, function (err, data) {
            if (err) {
                throw err;
            }
            res.json(data);
        });
    },
    // Add genres
    postGenre: function(req, res) {
        var genres = {
            name: req.body.name
        };
        var genre = new Genre(genres);
        genre.save(function (err, data) {
            if (err) {
                throw err;
            }
            res.json(data);
        });
    },
    // Update genres
    updateGenre: function(req, res) {
        var id = req.params.id;
        var genres = {
            $set: {
                name: req.body.name || 'Test'
            }
        };
        Genre.findByIdAndUpdate(id, genres, {new:true}, function (err, data) {
            if (err) {
                throw err;
            }
            res.json(data);
        });
    },
    // Delete genres
    removeGenre: function(req, res) {
        var id = req.params.id;
        Genre.remove({_id: id}, function (err, data) {
            if (err) {
                throw err;
            }
            res.json(data);
        });
    },
};