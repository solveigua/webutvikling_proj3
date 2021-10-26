const Movie = require('./models/movie');
const Character = require('./models/character');

const resolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
        getAllMovies: async () => {
            const movies = await Movie.find();
            return movies;
        },
        getMovie: async (_parent, {movieId}, _context, _info) => {
            try {
                const movie = await Movie.findById(movieId);
                return movie;
            }
            catch (err) {
                throw err;
            }
        },

        getAllCharacters: async () => {
            const characters = await Character.find();
            return characters;
        },
        getCharacter: async (_parent, {characterId}, _context, _info) => {
            try {
                const character = await Character.findById(characterId);
                return character;
             }
             catch (err) {
                 throw err;
             }
        }

    },
};

module.exports = resolvers;