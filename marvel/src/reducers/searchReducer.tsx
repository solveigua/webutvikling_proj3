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
    sorting: string | null
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

/*const client = new ApolloClient({
    uri: 'http://it2810-19.idi.ntnu.no:4000/graphql',
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

    ],
    movie: null,
    sorting: JSON.parse(localStorage.getItem('type') || '{}')
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