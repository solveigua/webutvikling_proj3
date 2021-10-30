import classes from './MovieItem.module.css';
import React from 'react';

//What is included in one movie item - we can change this if we want to expand ect. Remember to change the css file as well.

const MovieItem: React.FC<{title:String, seqNr:number, releaseYear:number}> = (props) => {

    return (
        <li className = {classes.movie}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.seqNr}>{props.seqNr}</div>
                <div className={classes.releaseYear}>{props.releaseYear}</div>
            </div>
            <div>
            </div>
        </li>
    );
};

export default MovieItem;