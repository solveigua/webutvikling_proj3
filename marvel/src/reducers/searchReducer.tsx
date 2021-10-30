import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/types";

export interface movieState {
    text: string,
    movies: {
        _id: number,
        title: string,
        seqNr: number,
        releaseYear: number
    }[]
    movie: {
        _id: number,
        title: string,
        seqNr: number,
        releaseYear: number
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

const initialState: movieState = {
    text: ' ',
    movies: [
        {_id: 1, title: "Captain America 1", seqNr: 1, releaseYear: 2011},
        {_id: 2, title: "Iron Man", seqNr: 2, releaseYear: 2008},
        {_id: 3, title: "Captain Marvel", seqNr: 3, releaseYear: 2019},
        {_id: 4, title: "Iron Man 2", seqNr: 4, releaseYear: 2010},
        {_id: 5, title: "Hulken", seqNr: 5, releaseYear: 2008},
        {_id: 6, title: "Thor", seqNr: 6, releaseYear: 2011},
        {_id: 7, title: "The Avengers", seqNr: 7, releaseYear: 2012},
        {_id: 8, title: "Iron Man 3", seqNr: 8, releaseYear: 2013},
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