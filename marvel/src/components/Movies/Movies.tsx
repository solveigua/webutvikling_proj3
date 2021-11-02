import { Fragment } from "react";
import MoviesContainer from "./MoviesContainer";
import MovieSummary from "./MovieSummary";

//Movies is what is shown on the page in App.tsx

const Movies = () => {
    return <Fragment>
        <MovieSummary/>
        <MoviesContainer/>
    </Fragment>
};

export default Movies