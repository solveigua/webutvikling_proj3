/**
 * Contains all Queries for movies.
 */

import mongoose from 'mongoose';
import config from '../../../config';
import Movie from '../../models/movie';

const moviesResolver = {
    movie: async (parent, { movieId }) => {
        try {
            const movie = await Movie.findById(movieId);
            return movie;
        }
        catch (err) {
            throw err;
        }
    },
    movies: async (parent, args, context) => {
        try {
            const movies = await Movie.find();
            return movies;
        }
        catch (err) {
            throw err;
        }
    }
};

export  {moviesResolver};


