import gql from "graphql-tag";

//Queries:
export const GET_ALL_MOVIES = gql`
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

export const GET_MOVIE = gql`
    query($id: String!){
        getMovie(input: {id: $id}) {
            title
            rating
            seqNr
            releaseYear
          }
    }
`

export const GET_ALL_CHARACTERS = gql`
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

export const GET_CHARACTER = gql`
    query($id: String!){
        getCharacter (input: {id: $id}){
            name
            actor
            movies
          }
    }
`

//Mutation:
export const SET_RATING = gql`
    mutation ($id: String!, $rating: Int!){
        setRating(input: {movieId: $id, rating: $rating}){
            title
            rating
          }
    }
`

