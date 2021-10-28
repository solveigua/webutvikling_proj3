import React from "react";
import marvelLogo from '../../assets/marvel.png';
import SearchButton from './SearchButton';
import classes from './Header.module.css';
import Searchbar from "../Search/Searchbar";
import {Provider} from 'react-redux';
import store from "../../store"

const Header = () => {
    return (
        <Provider store={store}>
        <div>
        <header className={classes.header}>
            <h1>Marvel Movies</h1>
        <Searchbar/>
        </header>
        <div className={classes['main-image']}>
            <img src={marvelLogo} alt="Marvel logo" />
        </div>
        </div>
        </Provider>
    )
};

export default Header;