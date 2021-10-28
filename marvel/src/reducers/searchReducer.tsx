import { PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/types";

interface movieState {
    text: string,
    movies: any
    loading: boolean,
    movie: any
}

const initialState: movieState = {
    text: ' ',
    movies: [],
    loading: false,
    movie: []
}


export default function(state = initialState, action: AnyAction) {
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