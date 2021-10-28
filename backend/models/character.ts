import mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
    name:{
        type: String
    },
    actor:{
        type: String
    },
    appearencesInMovies:{
        type: Number
    },
    movies:{
        type: Array
    }
}, {collection: 'Character'});

export const Character = mongoose.model('character', CharacterSchema);
