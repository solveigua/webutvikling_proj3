const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    seqNr: {
        type: Number
    },
    releaseYear: {
        type: Number
    }
}, {collection: 'Movie'});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;