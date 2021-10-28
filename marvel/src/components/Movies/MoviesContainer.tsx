import { Component } from "react";
import { connect } from "react-redux";
import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';

interface IMoviesContainerProps {
    movies: any;
}

interface IMoviesContainerState {

}

export class MoviesContainer extends Component<IMoviesContainerProps, IMoviesContainerState> {
    render() {
        const { movies } = this.props;

        let content = "";

        content = movies.lenght > 0 ? movies.map((movie: any) =>
            <MovieItem
                key={movie._id}
                title={movie.title}
                seqNr={movie.seqNr}
                releaseYear={movie.releaseYear}
            />) : null

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

const mapStateToProps = (state: any) => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer)