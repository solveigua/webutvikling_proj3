/**
 * Exports all resolvers
 */
import {Movie} from "./models/movie";
import {Character} from "./models/character";
import { ObjectId } from "mongoose";

type movieId ={
    id: ObjectId
}
type characterId = {
    id: ObjectId
}
type ratingInput = {
    movieId: ObjectId
    rating: Number
}

export const resolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
        getAllMovies: async () => {
            const movies = await Movie.find();
            console.log(movies);
            return movies;
        },

        getAllCharacters: async () => {
            const characters = await Character.find();
            return characters;
        },
        getMovie: async (_:Object, args: {input: movieId}) => {
            console.log(args.input.id);
            try {
                const movie = await Movie.findById(args.input.id);
                return movie;
             }
             catch (err) {
                 throw err;
             }
        },

        //TODO: implement
        getMoviesFromCharacter: async (_:Object, args: {input: characterId}) => {
            try {
                const character = await Character.findById(args.input.id);
                //return character.();
             }
             catch (err) {
                 throw err;
             }

        },

        getCharacter: async (_:Object, args: {input: characterId}) => {
            console.log(args.input.id);
            try {
                const character = await Character.findById(args.input.id);
                return character;
             }
             catch (err) {
                 throw err;
             }
        }

    },
    Mutation: {
        setRating: async (_:Object, args: {input: ratingInput}) => {
            console.log(args.input);
            try {
                const movie = await Movie.findById(args.input.movieId);
                console.log(movie);
                if (movie) {
                    await Movie.updateOne( movie ,{ $set: { rating: args.input.rating }});
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