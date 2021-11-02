import { Component } from "react";
import { connect } from "react-redux";
import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';
import { Movie } from '../Types';

interface IMoviesContainerProps {
    movies: Movie[];
    sorting: string
}

export class MoviesContainer extends Component<IMoviesContainerProps> {
   

    render() {
        const { movies } = this.props;
        const { sorting } = this.props; 
        let content: Movie[] = [];

        sorting === 'year' ? movies.sort(function(a, b) {
            return a.releaseYear - b.releaseYear;
        }) : movies.sort(function(a, b) {
            return a.seqNr - b.seqNr;
        });


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
                <div className="movie-deck">{content}</div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state: any /* typeof searchReducer gir feil:( */) => ({
    movies: state.movies.movies,
    sorting: state.movies.sort
})

export default connect(mapStateToProps)(MoviesContainer)