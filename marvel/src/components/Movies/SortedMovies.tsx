import classes from './SortedMovies.module.css';
import MovieItem from './MovieItem/MovieItem';
import Card from '../UI/Card';
import { Movie } from '../Types';
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

const SortedMovies = () => {

    const movieList = dummyData.map((movie) => (
        <MovieItem 
        key={movie._id} 
        title={movie.title}
        seqNr={movie.seqNr}
        releaseYear={movie.releaseYear}
        />
    ));
    return (
        <section className={classes.movies}>
            <Card>
            <ul>
            {movieList}
            </ul>
            </Card>
        </section>
    );
};

export default SortedMovies;