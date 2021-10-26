const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Movie {
    _id: ID
    title: String
    seqNr: Int
    releaseYear: Int
}

type Character {
    _id: ID
    name: String
    actor: String
    appearencesInMovies: Int
}
type Query {
    hello: String

    getAllMovies: [Movie]
    getMovie(movieId: ID): Movie

    getAllCharacters: [Character]
    getCharacter(characterId: ID): Character
}
`;

module.exports = typeDefs;