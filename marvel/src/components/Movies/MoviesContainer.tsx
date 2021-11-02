import { Component } from "react";
import { connect } from "react-redux";
import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';
import { Movie } from '../Types';

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
        content = movies?.length >-1 ? movies.map((movie: Movie) =>
            <MovieItem
                key={movie._id}
                _id={movie._id}
                title={movie.title}
                seqNr={movie.seqNr}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
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