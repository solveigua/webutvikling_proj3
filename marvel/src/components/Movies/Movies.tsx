import { Fragment } from "react";
import MoviesContainer from "./MoviesContainer";
import MovieSummary from "./MovieSummary";

//what is shown on the page

const Movies = () => {
    return <Fragment>
        <MovieSummary/>
        <MoviesContainer/>
    </Fragment>
};

export default Movies