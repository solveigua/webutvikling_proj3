import { Component } from "react";
import { connect } from "react-redux";
import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';
import { Movie } from '../Types';
import { GET_ALL_MOVIES } from "../../util/queries";
import { useQuery } from "@apollo/client";
import fetching from "../../util/fetching"

interface IMoviesContainerProps {
    movies: Movie[];
}

interface IMoviesContainerState {
    //Hva gjør jeg her?
    type: string | null;
    sortedMovies: any;
}

export class MoviesContainer extends Component<IMoviesContainerProps, IMoviesContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            type: localStorage.getItem("type") != null ? JSON.parse(localStorage.getItem('type') || '{}')
            : "year",
            sortedMovies: []
        };
    }


    render() {
        const { movies } = this.props;  
        let content: Movie[] = [];

        this.state.type === 'year' ? movies.sort(function(a, b) {
            return a.releaseYear - b.releaseYear;
        }) : movies.sort(function(a, b) {
            return a.seqNr - b.seqNr;
        });

        // this.setState({sortedMovies: movies})

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