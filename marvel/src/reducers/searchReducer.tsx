import { SEARCH_MOVIE, FETCH_MOVIES, SORT_MOVIES } from "../actions/types";

// searchReducer er litt misvisende navn siden den inneholder alle reducers

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
    sort: string | null
}

export interface ActionSearch {
    type: 'SEARCH_MOVIE';
    payload: string
}
export interface ActionFetch {
    type: 'FETCH_MOVIES';
    payload: string
}

export interface ActionSort {
    type: 'SORT_MOVIES';
    payload: string
}


export type Action = ActionSearch | ActionFetch | ActionSort;

const initialState: movieState = {
    text: '',
    movies: [

    ],
    movie: null,
    sort: JSON.parse(localStorage.getItem('type') || '{}').type
}


export default function foo(state = initialState, action: Action) {
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
        case SORT_MOVIES:
            return {
                ...state,
                sort: action.payload
            }
        default: 
            return state;
    }
}