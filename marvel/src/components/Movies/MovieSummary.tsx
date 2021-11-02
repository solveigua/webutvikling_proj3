import SortingChart from '../UI/SortingChart';
import SortingSurvey from '../UI/SortingSurvey';
import classes from './MovieSummary.module.css';

//informaton only, can add more here

const MovieSummary = () => {
    return (
    <section className={classes.summary}>
        <h2>All Marvel movies</h2>
        <p className={classes.info}> Search for your favourite Marvel movie</p>
        <p className= {classes.heading}> Sort movies based on: </p>
        <SortingChart/>
    </section>
    );
};

export default MovieSummary;