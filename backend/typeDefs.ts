import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Movie {
    _id: ID!
    title: String
    seqNr: Int
    releaseYear: Int
    rating: Int
}

type Character {
    _id: ID!
    name: String
    actor: String
    appearencesInMovies: Int
    movies: [String]
}
type Query {
    hello: String

    getAllMovies: [Movie]
    getMovie(input: movieId): Movie

    getAllCharacters: [Character]
    getCharacter(input: characterId): Character
    getMoviesFromCharacter: [String]
}

type Mutation {
    setRating(input: ratingInput): Movie
}

input movieId{
    id: ID
}
input characterId{
    id: ID
}
input ratingInput {
    movieId: ID
    rating: Int
}
`;

