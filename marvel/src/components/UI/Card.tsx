import classes from './Card.module.css';
import React from 'react';

//used in the display of the movielist

const Card:React.FC = props => {
    return(
        <div className ={classes.card}>{props.children}</div>
    );    
};

export default Card;