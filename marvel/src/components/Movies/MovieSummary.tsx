import SortingChart from '../UI/SortingChart';
import SortingSurvey from '../UI/SortingSurvey';
import classes from './MovieSummary.module.css';

//informaton only, can add more here

const MovieSummary = () => {
    return (
    <section className={classes.summary}>
        <h2>All Marvel movies</h2>
        <p> Search for you favourite Marvel movie</p>
        <SortingChart/>
    </section>
    );
};

export default MovieSummary;