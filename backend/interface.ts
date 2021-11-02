export interface IMovie {
    id: String;
    title: String;
    seqNr: number;
    releaseYear: number;
    rating: number;

}

export interface Character {
    id: String
    name: String
    actor: String
    appearencesInMovies: number
    movies: [String]
}

export interface ratingInput {
    id: String,
    rating: number
}

