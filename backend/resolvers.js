/**
 * Exports all resolvers
 */

const models = require("./models/movie")
const ObjectId = require("mongoose")

/*interface IMovie {
    id: String;
    title: String;
    seqNr: number;
    releaseYear: number;
    rating: number;

}

interface Character {
    id: String
    name: String
    actor: String
    appearencesInMovies: number
    movies: [String]
}

interface ratingInput {
    id: String,
    rating: number
}*/

export const resolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
        getAllMovies: async () => {
<<<<<<< HEAD:backend/resolvers.ts
            const movies = await Movie.find();
            //console.log(movies);
=======
            const movies = await models.Movie.find();
            console.log(movies);
>>>>>>> 13-add-rating:backend/resolvers.js
            return movies;
        },

        getAllCharacters: async () => {
            const characters = await models.Character.find();
            return characters;
        },
        getMovie: async (_, args) => {
            console.log(args.input.id);
            try {
                const movie = await models.Movie.findById(args.input.id);
                return movie;
             }
             catch (err) {
                 throw err;
             }
        },

        //Brukes ikke: kan slettes
        getMoviesFromCharacter: async (_:Object, args: {input: characterId}) => {
            try {
                const character = await models.Character.findById(args.input.id);
                //return character.();
             }
             catch (err) {
                 throw err;
             }

        },

        getCharacter: async (_, args) => {
            console.log(args.input.id);
            try {
                const character = await models.Character.findById(args.input.id);
                return character;
             }
             catch (err) {
                 throw err;
             }
        }

    },
    Mutation: {
        setRating: async (_, args) => {
            console.log(args.input);
            try {
                const movie = await models.Movie.findById(args.input.movieId);
                console.log(JSON.parse(JSON.stringify(movie)));
                if (movie) {
                    await models.Movie.updateOne( movie ,{ $set: { rating: args.input.rating }});
                    return movie;
                }
                else{
                    throw new Error('Movie does not exist in database. ');
                }
            }
            catch (err) {
                throw err;
            }
        }
    }
};