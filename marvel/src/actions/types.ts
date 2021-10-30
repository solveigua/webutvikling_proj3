
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export interface dispatchType {
    type: string; 
    payload: { _id: number; title: string; seqNr: number; releaseYear: number; }[] | string;
}

export interface stateType {
    text: string,
    movies: [{
        _id: number, 
        title: string,
        seqNr: number,
        releaseYear: number},
    ],
    movie: {
        _id: number, 
        title: string,
        seqNr: number,
        releaseYear: number
    }
}