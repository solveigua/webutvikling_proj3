import { ApolloClient, useQuery } from "@apollo/client";
import { Dispatch } from "react";
import { GET_ALL_MOVIES } from "../util/queries";
import { SEARCH_MOVIE, FETCH_MOVIES } from "./types";
import { dispatchType } from "./types";
import { Movie } from "../components/Types";
import { InMemoryCache } from "@apollo/client";

const dummyData = [
    {_id: 1, title: "Captain America 1", seqNr: 1, releaseYear: 2011},
    {_id: 2, title: "Iron Man", seqNr: 2, releaseYear: 2008},
    {_id: 3, title: "Captain Marvel", seqNr: 3, releaseYear: 2019},
    {_id: 4, title: "Iron Man 2", seqNr: 4, releaseYear: 2010},
    {_id: 5, title: "Hulken", seqNr: 5, releaseYear: 2008},
    {_id: 6, title: "Thor", seqNr: 6, releaseYear: 2011},
    {_id: 7, title: "The Avengers", seqNr: 7, releaseYear: 2012},
    {_id: 8, title: "Iron Man 3", seqNr: 8, releaseYear: 2013},
];

export const searchMovie = (text: string) => (dispatch: Dispatch<dispatchType>) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text: string) => async (dispatch: Dispatch<dispatchType>) => {

    console.log(text)

    const client = new ApolloClient({
        uri: 'http://it2810-19.idi.ntnu.no:4001/graphql',
        cache: new InMemoryCache()
      })
    

    const res = await client.query({
        query: GET_ALL_MOVIES,
        variables: {},
      })

      const arr = res?.data.getAllMovies
      console.log(text)
      console.log(arr)   //hente filmene fra databasen, foreløpig bare dummy data
        dispatch({
            type: FETCH_MOVIES,
            payload: arr
        })
}