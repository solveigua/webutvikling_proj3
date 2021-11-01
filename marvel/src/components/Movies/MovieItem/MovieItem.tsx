import classes from './MovieItem.module.css';
import React from 'react';
import StarRating from '../../Layout/StarRating';

 

//What is included in one movie item - we can change this if we want to expand ect. Remember to change the css file as well.

const MovieItem: React.FC<{key:string, title:String, seqNr:number, releaseYear:number, rating: number}> = (props) => {

    return (
        <li className = {classes.movie}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.seqNr}>{props.seqNr}</div>
                <div className={classes.releaseYear}>{props.releaseYear}</div>
                <StarRating 
                    movieId={props.key}
                />
            </div>
            <div>
            </div>
        </li>
    );
};

export default MovieItem;