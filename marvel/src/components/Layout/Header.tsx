import React from "react";
import marvelLogo from '../../assets/marvel.png';
import SearchButton from './SearchButton';
import classes from './Header.module.css';

const Header = () => {

    return <React.Fragment>
        <header className={classes.header}>
            <h1>Marvel Movies</h1>
            <SearchButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={marvelLogo} alt="Marvel logo" />
        </div>
    </React.Fragment>

};

export default Header;