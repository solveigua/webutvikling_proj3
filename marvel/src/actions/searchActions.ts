import { SEARCH_MOVIE, FETCH_MOVIES } from "./types";

const dummyData = [
    {_id: 1, title: "Captain America 1", seqNr: 1, releaseYear: 2011},
    {_id: 2, title: "Iron Man", seqNr: 3, releaseYear: 2008},
    {_id: 3, title: "Captain Marvel", seqNr: 4, releaseYear: 2019},
    {_id: 4, title: "Iron Man 2", seqNr: 3, releaseYear: 2010},
    {_id: 5, title: "Hulken", seqNr: 5, releaseYear: 2008},
    {_id: 5, title: "Thor", seqNr: 6, releaseYear: 2011},
    {_id: 6, title: "The Avengers", seqNr: 7, releaseYear: 2012},
    {_id: 7, title: "Iron Man 3", seqNr: 8, releaseYear: 2013},
];


export const searchMovie = (text: string) => (dispatch: any) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = (text: string) => (dispatch: any) => {
    //hente filmene fra databasen
        dispatch({
            type: FETCH_MOVIES,
            payload: dummyData.filter((movie) =>
            movie.title.toLowerCase().includes(text.toLowerCase()))
        })
}