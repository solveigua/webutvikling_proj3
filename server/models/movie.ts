/**
 * Define model for Movie.
 */

 import mongoose from 'mongoose';

 /**
  * Movie Schema
  * TODO expand with characterlist
  */
const movieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String
    },
    seqNr: {
        type: Number
    },
    releaseYear: {
        type: Number
    }
});

movieSchema.statics = {
    /**
     * Get movie.
     * @param {ObjectId} id the id of the movie
     */
    get(id: String): mongoose.Document {
        return this.findById(id).execAsync().then((movie:any) => {
            if (movie) {
                return movie;
            }
        });
    }
};

export default mongoose.model('Movie', movieSchema);
