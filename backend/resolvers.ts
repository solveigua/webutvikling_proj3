import {Movie} from "./models/movie";
import {Character} from "./models/character";
import { ObjectId } from "mongoose";

type movieId ={
    id: ObjectId
}
type characterId = {
    id: ObjectId
}

export const resolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
        getAllMovies: async () => {
            const movies = await Movie.find();
            return movies;
        },
        /*getMovie:(_: Object,  args: { input: movieId }) => {
            console.log(args.input.id);
            return new Promise((resolve, reject) => {
                const movie = Movie.findOne({_id: args.input.id}, function(err: Error, result: typeof Movie | undefined){
                    if(err || !result){
                        reject("Something went wrong");
                    }
                    else {
                        resolve(movie);
                    }
                })
            });
        },*/


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
};

