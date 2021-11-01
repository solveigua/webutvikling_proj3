import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/types";
import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_MOVIES } from "../util/queries";
import { Movie } from "../components/Types";
//import { getAllMovies } from "../util/getData";

export interface movieState {
    text: string,
    movies: {
        _id: string,
        title: string,
        seqNr: number,
        releaseYear: number,
        rating: number,
    }[]
    movie: {
        _id: string,
        title: string,
        seqNr: number,
        releaseYear: number,
        rating: number,
    } | null
}

export interface ActionSearch {
    type: 'SEARCH_MOVIE';
    payload: string
}
export interface ActionFetch {
    type: 'FETCH_MOVIES';
    payload: string
}

export type Action = ActionSearch | ActionFetch;

const client = new ApolloClient({
    uri: 'http://it2810-19.idi.ntnu.no:4001/graphql',
    cache: new InMemoryCache()
  })

//const getMovies = getAllMovies();

//const movieList = getMovies ? getMovies.data as Movie[] : null;

/*onst MovieArray = movieList ? movieList.map((movie:Movie) => {
    return {
        _id: movie._id,
        title: movie.title,
        seqNr: movie.seqNr,
        releaseYear: movie.releaseYear,
        rating: movie.rating,
    }
}): [] ;*/




const initialState: movieState = {
    text: '',
    movies: [
        {_id: '1', title: "Captain America 1", seqNr: 1, releaseYear: 2011, rating:3},
        {_id: '2', title: "Iron Man", seqNr: 3, releaseYear: 2008, rating:3},
        {_id: '3', title: "Captain Marvel", seqNr: 4, releaseYear: 2019, rating:3},
        {_id: '4', title: "Iron Man 2", seqNr: 3, releaseYear: 2010, rating:3},
        {_id: '5', title: "Hulken", seqNr: 5, releaseYear: 2008, rating:3},
        {_id: '5', title: "Thor", seqNr: 6, releaseYear: 2011, rating:3},
        {_id: '6', title: "The Avengers", seqNr: 7, releaseYear: 2012, rating:3},
        {_id: '7', title: "Iron Man 3", seqNr: 8, releaseYear: 2013, rating:3}
    ],
    movie: null
}


export default function(state = initialState, action: Action) {
    
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            } 
        default: 
            return state;
    }
}