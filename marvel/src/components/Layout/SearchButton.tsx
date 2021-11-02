//import SearchIcon from "../Search/SearchIcon";
import classes from './SearchButton.module.css';
import React from 'react';

const SearchButton:React.FC<{onClick: (e: React.MouseEvent<HTMLElement>) => void}> = (props) => {
    return <button className={classes.button} onClick={props.onClick}>
        <span>Search</span>
    </button>
};

export default SearchButton;