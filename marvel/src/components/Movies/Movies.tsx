import { Fragment } from "react";
import MovieSummary from "./MovieSummary";
import SortedMovies from "./SortedMovies";

//what is shown on the page

const Movies = () => {
    return <Fragment>
        <MovieSummary/>
        <SortedMovies/>
    </Fragment>
};

export default Movies