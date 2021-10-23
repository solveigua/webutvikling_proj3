import { Fragment } from "react";
import MovieSummary from "./MovieSummary";
import SortedMovies from "./SortedMovies";

const Movies = () => {
    return <Fragment>
        <MovieSummary/>
        <SortedMovies/>
    </Fragment>
};

export default Movies;