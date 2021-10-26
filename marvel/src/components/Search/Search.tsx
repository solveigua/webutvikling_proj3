import classes from './Search.module.css';
import React from 'react';
import Modal from '../UI/Modal';

//Need to add more functionality

//we need some buttons, and we need an input field -> when pushed on "search" we need that the sortedmovies get updated

const Search:React.FC<{ onClose:() => void}>  = props => {

    return (
        <Modal onClose={props.onClose}>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Search</button>
        </div>
        </Modal>
    );
};

export default Search;