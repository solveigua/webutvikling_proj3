import { Component } from "react";
import { connect } from "react-redux";
import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';
import { stateType } from '../../actions/types';
import { Movie } from '../Types';
import { movieState } from '../../reducers/searchReducer';

interface IMoviesContainerProps {
    movies: Movie[];
}

interface IMoviesContainerState {
    //Hva gjør jeg her?
}

export class MoviesContainer extends Component<IMoviesContainerProps, IMoviesContainerState> {
    render() {
        const { movies } = this.props;

        let content: Movie[] = [];
        content = movies.length > 0 ? movies.map((movie: any) =>
            <MovieItem
                key={movie._id}
                title={movie.title}
                seqNr={movie.seqNr}
                releaseYear={movie.releaseYear}
            />) : null as any

        return (
            <div>
                <section className={classes.movies}>
                    <Card>
                        <ul>
                            {content}
                        </ul>
                    </Card>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state: any /*movieState gir feil:( */) => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)