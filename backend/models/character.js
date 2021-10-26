const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name:{
        type: String
    },
    actor:{
        type: String
    },
    appearencesInMovies:{
        type: Number
    }
}, {collection: 'Character'});

const Character = mongoose.model('character', CharacterSchema);

module.exports = Character;