import gql from "graphql-tag";

//Queries:
const GET_ALL_MOVIES = gql`
    query{
        getAllMovies {
            _id
            title
            seqNr
            releaseYear
            rating
          }
    }
`

const GET_MOVIE = gql`
    query($id: String!){
        getMovie(input: {id: $id}) {
            title
            rating
            seqNr
            releaseYear
          }
    }
`

const GET_ALL_CHARACTERS = gql`
    query{
        getAllCharacters {
            _id
            name
            actor
            appearencesInMovies
            movies
          }
    }
`

const GET_CHARACTER = gql`
    query($id: String!){
        getCharacter (input: {id: $id}){
            name
            actor
            movies
          }
    }
`

//Mutation:
const SET_RATING = gql`
    mutation ($id: String!, $rating: Int!){
        setRating(input: {movieId: $id, rating: $rating}){
            title
            rating
          }
    }
`
export {GET_ALL_MOVIES, GET_MOVIE, GET_ALL_CHARACTERS, GET_CHARACTER, SET_RATING }